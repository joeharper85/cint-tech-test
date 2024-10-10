import { ActionTypes } from '../actions';

export type Questions = {
  response_code: number;
  results: Question[];
};

export type Question = {
  category: string;
  type: QuestionType;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers?: string[];
};

export enum Difficulty {
  All = 'All',
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

export enum QuestionType {
  Boolean = 'boolean',
  Multiple = 'multiple',
  Text = 'text',
}

export type QuizContextType = {
  numberOfQuestions: number;
  correctAnswers: number;
};

export type SetNumberOfQuestions = {
  type: ActionTypes.SET_NUMBER_OF_QUESTIONS;
  payload: number;
};

export type AddCorrectAnswerAction = {
  type: ActionTypes.ADD_CORRECT_ANSWER;
};

export type ResetQuizAction = {
  type: ActionTypes.RESET_QUIZ;
};

export type Actions = SetNumberOfQuestions | AddCorrectAnswerAction | ResetQuizAction;
