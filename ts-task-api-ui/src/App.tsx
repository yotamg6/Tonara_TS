import './App.css';
import { Routes, Route } from 'react-router-dom';
import CoursePage from './components/CoursePage';
import NewAssignment from './components/NewAssignment';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CoursePage />} />
        <Route path="/new-assignment" element={<NewAssignment />} />
      </Routes>
    </div>
  );
};

export default App;
