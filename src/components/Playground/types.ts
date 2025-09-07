export type IMapArrowCodes = {
  ArrowUp: string;
  ArrowDown: string;
  ArrowLeft: string;
  ArrowRight: string;
};

export type IComplexity = 'EASY' | 'NORMAL' | 'HARD';

export type IEndGame = {
  SUCCESS_COUNT: number;
  UNSUCCESS_COUNT: number;
};

export type IEndGameConditions = {
  EASY: IEndGame;
  NORMAL: IEndGame;
  HARD: IEndGame;
};
