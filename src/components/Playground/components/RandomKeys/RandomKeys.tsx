import type * as React from 'react';
import { useAppSelector } from '../../../../app/hooks.ts';
import RandomArrows from './RandomArrows';

export type IRandomKeysProps = {
  isTimerActive: boolean;
};

const RandomKeys: React.FC<IRandomKeysProps> = () => {
  // const {isTimerActive} = props;

  const state = useAppSelector((state) => state.playground);

  console.log(state.steps);
  return (
    <div>
      <h3>Random Keys</h3>

      {state.steps.length === 0 ? (<span>Hello</span>) : (
        <RandomArrows />
      )}
    </div>
  );
};

export default RandomKeys;
