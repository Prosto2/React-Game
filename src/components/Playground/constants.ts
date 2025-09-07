import type { IEndGameConditions, IMapArrowCodes } from './types.ts';

export const INTERVAL_TIME = {
  EASY: 1000,
  NORMAL: 800,
  HARD: 500
};

export const MAP_ARROW_CODES: IMapArrowCodes = {
  ArrowUp: '⬆️',
  ArrowDown: '⬇️',
  ArrowLeft: '⬅️',
  ArrowRight: '➡️'
};

export const ARR_ARROW_CODES = Object.keys(MAP_ARROW_CODES);

export const END_GAME_CONDITIONS: IEndGameConditions = {
  EASY: {
    SUCCESS_COUNT: 3,
    UNSUCCESS_COUNT: 3
  },
  NORMAL: {
    SUCCESS_COUNT: 5,
    UNSUCCESS_COUNT: 2
  },
  HARD: {
    SUCCESS_COUNT: 10,
    UNSUCCESS_COUNT: 1
  }
};
