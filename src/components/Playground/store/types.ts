export type IPlaygroundStepsState = {
  step: number;
  currentValue: string | null;
  enteredValue: string | null;
  success: boolean | null;
};

export type IPlaygroundState = {
  currentStep: number;
  steps: IPlaygroundStepsState[];
  totalSuccessful: number;
  totalUnsuccessful: number;
};
