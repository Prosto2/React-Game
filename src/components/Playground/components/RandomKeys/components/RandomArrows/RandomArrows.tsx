import cn from 'classnames';
import type * as React from 'react';
import { MAP_ARROW_CODES } from '../../../../constants.ts';
import type { IMapArrowCodes } from '../../../../types.ts';
import type { IPlaygroundStepsState } from '../../../../store/types.ts';
import { useAppSelector } from '../../../../../../app/hooks.ts';

import stylesCommon from '../../RandomKeys.module.css';
import styles from './RandomArrows.module.css';

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground);

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if (element.success) {
      return cn(stylesCommon.icon, styles.iconSuccess);
    } else if (element.success !== null) {
      return cn(stylesCommon.icon, styles.iconUnSuccess);
    }

    return stylesCommon.icon;
  };

  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((element) => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  );
};

export default RandomArrows;
