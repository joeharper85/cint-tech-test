import React from 'react';
import { useQuizContext } from '../../context/useQuizContext';
import { ActionTypes } from '../../actions';
import { useNavigate } from 'react-router-dom';

const ResultsSummary: React.FC = () => {
  const { state, dispatch } = useQuizContext();

  const navigate = useNavigate();

  const handleReset = () => {
    dispatch({ type: ActionTypes.RESET_QUIZ });
    navigate('/start-quiz');
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-2 prose w-96">
        <p className="text-2xl font-semibold text-center text-base-content text-opacity-80">Summary</p>
        <span>
          Correct:{' '}
          <span className="font-bold" data-testid="summary-correct">
            {state.correctAnswers}
          </span>
        </span>
        <span>
          Wrong:{' '}
          <span className="font-bold" data-testid="summary-wrong">
            {state.numberOfQuestions - state.correctAnswers}
          </span>
        </span>
        <span>
          Questions answered:{' '}
          <span className="font-bold" data-testid="summary-answered">
            {state.numberOfQuestions}
          </span>
        </span>
        <span>
          Final score:{' '}
          <span data-testid="summary-score" className="font-bold">
            {(100 * state.correctAnswers) / state.numberOfQuestions}%
          </span>
        </span>
        <button className="btn" onClick={() => handleReset()}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultsSummary;
