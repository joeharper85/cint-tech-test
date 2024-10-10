import { ActionTypes } from '../actions';
import { Actions, QuizContextType } from '../types/types';

export const initialState: QuizContextType = {
  correctAnswers: 0,
  numberOfQuestions: 10,
};

export const reducer = (state: QuizContextType, action: Actions): QuizContextType => {
  switch (action.type) {
    case ActionTypes.SET_NUMBER_OF_QUESTIONS: {
      return {
        ...state,
        numberOfQuestions: action.payload,
      };
    }

    case ActionTypes.ADD_CORRECT_ANSWER: {
      const stateCopy = { ...state };
      stateCopy.correctAnswers++;
      return {
        ...stateCopy,
      };
    }

    case ActionTypes.RESET_QUIZ: {
      return { ...initialState };
    }

    default:
      return state;
  }
};
