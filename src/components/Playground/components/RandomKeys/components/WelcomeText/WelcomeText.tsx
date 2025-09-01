import type * as React from 'react';

export type IWelcomeText = {
  isTimerActive: boolean;
};

export const WelcomeText: React.FC<IWelcomeText> = (props) => {
  const { isTimerActive } = props;

  if (isTimerActive) {
    return <span>Loading...</span>;
  }

  return <span>Press "Play" to start the game</span>;
};

export default WelcomeText;
