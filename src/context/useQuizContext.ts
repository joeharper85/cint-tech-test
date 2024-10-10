import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export const useQuizContext = () => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error("Quiz Context used outside of provider");
  }

  return quizContext;
};
