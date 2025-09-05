import type * as React from 'react';
import { TypographyText } from '../../../../../UI';

import styles from './ResultMessage.module.css';

export type IResultMessageProps = {
  isSuccessEndGame: boolean;
};

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props;

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>
          Congratulations! <br /> You win!
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          My regrets. <br /> You have lost
        </TypographyText>
      )}
    </div>
  );
};

export default ResultMessage;
