import playgroundReducer, {
  initialState,
  setCurrentStep,
  resetStore
} from '../slices';
import { expect } from 'vitest';

describe('reducer resetStore', () => {
  it('check resetStore', () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep()
    );

    const resetStoreState = playgroundReducer(
      setCurrentStepState,
      resetStore()
    );

    expect(setCurrentStepState.currentStep).toBe(1);
    expect(resetStoreState).toEqual(initialState);
  });
});
