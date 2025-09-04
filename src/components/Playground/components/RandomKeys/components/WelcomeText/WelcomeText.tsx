import type * as React from 'react';
import { TypographyText } from '../../../../../UI';
import loader from './img/loader.svg';

import stylesCommon from '../../RandomKeys.module.css';
import styles from './WelcomeText.module.css';

export type IWelcomeText = {
  isTimerActive: boolean;
};

export const WelcomeText: React.FC<IWelcomeText> = (props) => {
  const { isTimerActive } = props;

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={loader} alt='loader' />
        </span>
      </div>
    );
  }

  return <TypographyText>Press "Play" to start the game</TypographyText>;
};

export default WelcomeText;
