import type * as React from 'react';
import { useAppSelector } from '../../../../app/hooks.ts';
import { MAP_ARROW_CODES } from '../../constants.ts';
import type { IMapArrowCodes } from '../../types.ts';
import type { IPlaygroundStepsState } from '../../store/types.ts';

import styles from "./RandomKeys.module.css";

export type IRandomKeysProps = {
  isTimerActive: boolean;
};

const RandomKeys: React.FC<IRandomKeysProps> = () => {
  // const {isTimerActive} = props;

  const state = useAppSelector((state) => state.playground);

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if(element.success) {
      return styles.iconSuccess;
    } else if (element.success !== null) {
      return styles.iconUnSuccess;
    }

    return styles.icon;
  }

  console.log(state.steps);
  return (
    <div>
      {state.steps.map((element) => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  );
};

export default RandomKeys;
