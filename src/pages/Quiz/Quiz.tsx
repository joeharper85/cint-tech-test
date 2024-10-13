import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import _ from 'lodash';
import { getData } from '../../api/getData';
import QuestionPanel from '../../components/Question/QuestionPanel';
import { Question } from '../../types/types';
import { useQuizContext } from '../../context/useQuizContext';

const Quiz: React.FC = () => {
  const { state } = useQuizContext();

  const result = useQuery({
    queryKey: ['questions'],
    queryFn: () => getData(),
  });

  const questions = useMemo(() => {
    if (!result.isLoading) {
      return _.shuffle(result.data.results).slice(0, state.numberOfQuestions);
    }
  }, [result.isLoading]);

  if (result.isLoading) {
    return (
      <div className="flex flex-col items-center">
        <div className="flex">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
        <p className="prose">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <QuestionPanel questions={questions as Question[]} />
    </div>
  );
};

export default Quiz;
