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
import Description from './components/Description';

import styles from './Playground.module.css';
import Complexity from './components/Complexity';
import type { IComplexity } from './types.ts';

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false);
  const [complexity, setComplexity] = useState<IComplexity>('EASY');

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess());
        dispatch(setCurrentStep());
        dispatch(setSteps());
      }, INTERVAL_TIME[complexity]);
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
      state.totalSuccessful === END_GAME_CONDITIONS[complexity].SUCCESS_COUNT;
    const isUnsuccessful =
      state.totalUnsuccessful ===
      END_GAME_CONDITIONS[complexity].UNSUCCESS_COUNT;

    if (isSuccessful) setIsSuccessEndGame(true);
    if (isUnsuccessful) setIsSuccessEndGame(false);

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true);
      setIsTimerActive(false);
    }
  }, [state.totalSuccessful, state.totalUnsuccessful]);

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>
      <div className={styles.column}>
        <Description />
        <Complexity setComplexity={setComplexity} />
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>

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
