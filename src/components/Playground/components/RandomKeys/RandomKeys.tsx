import type * as React from 'react';
import { useAppSelector } from '../../../../app/hooks.ts';
import RandomArrows from './components/RandomArrows';
import WelcomeText from './components/WelcomeText';
import { TypographyHeader } from '../../../UI';

export type IRandomKeysProps = {
  isTimerActive: boolean;
};

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props;

  const state = useAppSelector((state) => state.playground);

  console.log(state.steps);
  return (
    <div>
      <TypographyHeader>Random Keys</TypographyHeader>

      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  );
};

export default RandomKeys;
