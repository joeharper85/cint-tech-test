import { Navigate } from 'react-router-dom';
import App from './App';
import StartQuiz from './pages/StartQuiz/StartQuiz';
import Quiz from './pages/Quiz/Quiz';
import ResultsSummary from './pages/ResultsSummary/ResultsSummary';

export const routerConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/start-quiz" replace /> },
      { path: '/start-quiz', element: <StartQuiz /> },
      { path: '/quiz', element: <Quiz /> },
      { path: '/summary', element: <ResultsSummary /> },
    ],
  },
];
