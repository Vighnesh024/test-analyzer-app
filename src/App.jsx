import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TopicPage from './pages/TopicPage';
import TestAnalysis from './pages/TestAnalysis';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/topic/:topicId' element={<TopicPage />} />
        <Route path='/test-analysis' element={<TestAnalysis />} />
      </Routes>
    </Router>
  );
};

export default App;
