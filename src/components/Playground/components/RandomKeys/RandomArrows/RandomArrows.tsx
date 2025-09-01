import type * as React from 'react';
import { MAP_ARROW_CODES } from '../../../constants.ts';
import type { IMapArrowCodes } from '../../../types.ts';
import type { IPlaygroundStepsState } from '../../../store/types.ts';
import styles from './RandomArrows.module.css';
import { useAppSelector } from '../../../../../app/hooks.ts';

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground);

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if(element.success) {
      return styles.iconSuccess;
    } else if (element.success !== null) {
      return styles.iconUnSuccess;
    }

    return styles.icon;
  }

  return (
    <>
    {state.steps.map((element) => (
      <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
    ))}
  </>);
}

export default RandomArrows;