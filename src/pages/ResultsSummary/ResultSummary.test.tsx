import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QuizContext } from '../../context/QuizContext';
import ResultsSummary from './ResultsSummary';
import { QuizContextType } from '../../types/types';
import { MemoryRouter } from 'react-router-dom';

describe('Test ResultSummary', () => {
  it('Correctly displays score', async () => {
    const state: QuizContextType = {
      numberOfQuestions: 10,
      correctAnswers: 5,
    };

    const dispatch = vi.fn();

    render(
      <QuizContext.Provider value={{ state, dispatch }}>
        <MemoryRouter>
          <ResultsSummary />
        </MemoryRouter>
      </QuizContext.Provider>,
    );

    expect(await screen.findByTestId('summary-score')).toHaveTextContent('50%');
  });
});
