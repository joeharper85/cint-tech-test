import React, { ReactNode, useMemo, useState } from 'react';
import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { decode } from 'html-entities';
import _ from 'lodash';
import { Question, QuestionType } from '../../types/types';
import RadioGroup from '../RadioGroup/RadioGroup';
import TextArea from '../TextArea/TextArea';
import { useQuizContext } from '../../context/useQuizContext';
import { ActionTypes } from '../../actions';

export type QuestionProps = {
  questions: Question[];
};

const QuestionPanel: React.FC<QuestionProps> = (props) => {
  const { questions } = props;
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { state, dispatch } = useQuizContext();

  const navigate = useNavigate();

  const getQuestion = (question: Question): ReactNode => {
    if ([QuestionType.Multiple, QuestionType.Boolean].includes(question.type)) {
      const allAnswers: string[] = _.shuffle([question.correct_answer, ...(question.incorrect_answers as string[])]);
      return (
        <RadioGroup
          values={allAnswers}
          onChangeProp={function (value: string): void {
            setCurrentAnswer(value);
          }}
        />
      );
    } else if (question.type === QuestionType.Text) {
      return (
        <TextArea
          onChangeProp={function (value: string): void {
            setCurrentAnswer(value);
          }}
        />
      );
    }
  };

  const question = questions[currentQuestionIndex];

  const questionComponent: ReactNode = useMemo(() => getQuestion(question), [question]);

  const handleAnswer = () => {
    if (currentAnswer === question.correct_answer) {
      dispatch({ type: ActionTypes.ADD_CORRECT_ANSWER });
    }
    if (currentQuestionIndex === state.numberOfQuestions - 1) {
      navigate('/summary');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <label htmlFor="progress" className="label">
        Quiz Progress
      </label>
      <progress id="progress" className="w-96 progress" value={(100 * currentQuestionIndex) / questions.length} max="100" />
      <p className="w-3/4 text-2xl font-semibold text-center text-base-content text-opacity-80">{decode(question.question)}</p>
      <div className="flex flex-col items-center justify-center">
        {questionComponent}
        <Button className="mt-3 btn w-80" onClick={() => handleAnswer()}>
          Submit answer
        </Button>
      </div>
    </div>
  );
};

export default QuestionPanel;
