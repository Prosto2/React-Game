export type IPlaygroundStepsState = {
  currentValue: string;
};

export type IPlaygroundState = {
  currentStep: number;
  steps: IPlaygroundStepsState[];
};
