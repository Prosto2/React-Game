export type IPlaygroundStepsState = {
  currentValue: string | null;
  enteredValue: string | null;
};

export type IPlaygroundState = {
  currentStep: number;
  steps: IPlaygroundStepsState[];
};
