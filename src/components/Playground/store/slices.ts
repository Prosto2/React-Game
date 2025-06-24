import { createSlice } from '@reduxjs/toolkit';
import type { IPlaygroundState } from './types.ts';
import { ARR_ARROW_CODES } from '../constants.ts';

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: []
};
export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1;
    },

    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length);

      state.steps.push({
        currentValue: ARR_ARROW_CODES[randomKeys],
        enteredValue: null,
      });
    },

    setEnteredValue: (state, action) => {},
  }
});

export const { setCurrentStep, setSteps } = playgroundSlice.actions;
export default playgroundSlice.reducer;
