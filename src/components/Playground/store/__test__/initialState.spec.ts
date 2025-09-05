import playgroundReducer, { initialState } from '../slices';
import { expect } from 'vitest';

describe('initial state', () => {
  it('check initial state', () => {
    const state = playgroundReducer(undefined, { type: 'unknown' });

    expect(state).toEqual(initialState);
  });
});
