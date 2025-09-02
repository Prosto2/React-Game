import type * as React from 'react';
import { TypographyText } from '../../../../../UI';

export type IWelcomeText = {
  isTimerActive: boolean;
};

export const WelcomeText: React.FC<IWelcomeText> = (props) => {
  const { isTimerActive } = props;

  if (isTimerActive) {
    return <span>Loading...</span>;
  }

  return <TypographyText>Press "Play" to start the game</TypographyText>;
};

export default WelcomeText;
