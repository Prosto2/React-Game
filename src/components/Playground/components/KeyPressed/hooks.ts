import { useAppSelector } from '../../../../app/hooks.ts';
import { MAP_ARROW_CODES } from '../../constants.ts';
import type { IMapArrowCodes } from '../../types.ts';

export const useKeyPressedElement = (): string => {
  const state = useAppSelector((state) => state.playground);

  if (state.steps.length) {
    const enteredValue = state.steps[state.currentStep - 1].enteredValue;

    if (enteredValue) {
      return MAP_ARROW_CODES[enteredValue as keyof IMapArrowCodes];
    }
  }

  return '⌛️';
};
