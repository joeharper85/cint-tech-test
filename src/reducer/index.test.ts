import { beforeEach, describe, expect, it } from 'vitest';
import { QuizContextType } from '../types/types';
import { reducer } from '.';
import { ActionTypes } from '../actions';

describe('Test context reducer', () => {
  let initialState: QuizContextType;
  beforeEach(() => {
    initialState = {
      correctAnswers: 0,
      numberOfQuestions: 10,
    };
  });
  it('Correctly resets quiz', () => {
    const state = initialState;
    state.numberOfQuestions = 15;
    const newState: QuizContextType = reducer(state, { type: ActionTypes.RESET_QUIZ });
    expect(state.numberOfQuestions).toBe(15);
    expect(newState.numberOfQuestions).toBe(10);
  });
});
