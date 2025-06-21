import type * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { setCurrentStep, setSteps } from './store/slices.ts';
import { useEffect, useRef, useState } from 'react';
import Controls from './components/Controls/Controls.tsx';
import { INTERVAL_TIME } from './constants.ts';
import RandomKeys from './components/RandomKeys';

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
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

  return (
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
    </div>
  );
};

export default Playground;
