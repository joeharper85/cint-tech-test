import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-col content-center gap-4 mt-20 prose max-w-none">
      <h1 className="mb-20 text-center">CintQuiz</h1>
      <Outlet />
    </div>
  );
};

export default App;
