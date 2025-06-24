import type * as React from 'react';
import { useAppSelector } from '../../../../app/hooks.ts';
import { MAP_ARROW_CODES } from '../../constants.ts';
import type { IMapArrowCodes } from '../../types.ts';

export type IRandomKeysProps = {
  isTimerActive: boolean;
};

const RandomKeys: React.FC<IRandomKeysProps> = () => {
  // const {isTimerActive} = props;

  const state = useAppSelector((state) => state.playground);

  console.log(state.steps);
  return (
    <div>
      {state.steps.map((element) => (
        <span key={element.step}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  );
};

export default RandomKeys;
