import playgroundReducer, {
  initialState,
  setCurrentStep,
  setSteps
} from '../slices';
import { expect } from 'vitest';

describe('reducer setCurrentStep', () => {
  it('check setCurrentStep', () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep()
    );

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps());

    expect(initialState.steps.length).toBe(0);
    expect(setStepsState.steps.length).toBe(1);
  });
});
