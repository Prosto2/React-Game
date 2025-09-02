import type * as React from 'react';
import { TypographyText } from '../../../../../UI';

export type IResultMessageProps = {
  isSuccessEndGame: boolean;
};

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props;

  return isSuccessEndGame ? (
    <TypographyText>
      Congratulations! <br /> You win!
    </TypographyText>
  ) : (
    <TypographyText>
      My regrets. <br /> You have lost
    </TypographyText>
  );
};

export default ResultMessage;
