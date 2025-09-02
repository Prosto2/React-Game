import type * as React from 'react';
import { useAppSelector } from '../../../../app/hooks.ts';
import { TypographyHeader } from '../../../UI';

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground);

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <span>Errors: {state.totalUnsuccessful}</span>
      <br />
      <span>Successful: {state.totalSuccessful}</span>
    </>
  );
};

export default Score;
