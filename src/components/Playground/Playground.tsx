import type * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { setCurrentStep, setSteps, setUnsuccess } from './store/slices.ts';
import { useEffect, useRef, useState } from 'react';
import Controls from './components/Controls/Controls.tsx';
import { END_GAME_CONDITIONS, INTERVAL_TIME } from './constants.ts';
import RandomKeys from './components/RandomKeys';
import KeyPressed from './components/KeyPressed';
import Score from './components/Score';
import Modal from './components/Modal';

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false);

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess());
        dispatch(setCurrentStep());
        dispatch(setSteps());
      }, INTERVAL_TIME);
    } else {
      if (refreshIntervalId.current) {
        clearInterval(refreshIntervalId.current);
      }
    }

    return () => {
      if (refreshIntervalId.current) {
        clearInterval(refreshIntervalId.current);
      }
    };
  }, [dispatch, isTimerActive]);

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT;
    const isUnsuccessful =
      state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT;

    if (isSuccessful) setIsSuccessEndGame(true);
    if (isUnsuccessful) setIsSuccessEndGame(false);

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true);
      setIsTimerActive(false);
    }
  }, [state.totalSuccessful, state.totalUnsuccessful]);

  return (
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
      <Score />
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  );
};

export default Playground;
