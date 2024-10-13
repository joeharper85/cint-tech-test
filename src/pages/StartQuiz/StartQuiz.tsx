import { Field, Fieldset, Legend, Label, Input, Button } from '@headlessui/react';
import React, { useState } from 'react';
import { useQuizContext } from '../../context/useQuizContext';
import { ActionTypes } from '../../actions';
import { initialState } from '../../reducer';
import { useNavigate } from 'react-router-dom';

const StartQuiz: React.FC = () => {
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] = useState(initialState.numberOfQuestions);

  const { dispatch } = useQuizContext();

  const navigate = useNavigate();

  const handleQuizStart = () => {
    dispatch({
      type: ActionTypes.SET_NUMBER_OF_QUESTIONS,
      payload: selectedNumberOfQuestions,
    });

    navigate('/quiz');
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2">
        <Fieldset>
          <Legend className="mb-8 text-2xl font-semibold text-center text-base-content text-opacity-80">Take a quiz</Legend>
          <Field>
            <Label className="label">How many questions?</Label>
            <Input
              className="input input-bordered w-80"
              type="number"
              min="0"
              max="20"
              defaultValue="10"
              onChange={(changeEvent) => setSelectedNumberOfQuestions(Number(changeEvent.target.value))}
            />
          </Field>
        </Fieldset>
        <Button className="btn" onClick={() => handleQuizStart()}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default StartQuiz;
