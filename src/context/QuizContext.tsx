import { ReactNode, createContext, useReducer } from 'react';
import { Actions, QuizContextType } from '../types/types';
import { initialState, reducer } from '../reducer';

type ContextType = {
  state: QuizContextType;
  dispatch: React.Dispatch<Actions>;
};

export const QuizContext = createContext<ContextType | null>(null);

type ContextProviderProps = {
  children: ReactNode;
};

const QuizContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
};

export default QuizContextProvider;
