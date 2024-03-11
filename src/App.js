import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpensesList from './ExpensesList';
import ExpenseDetail from './ExpenseDetail';
import React from 'react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExpensesList />} />
        <Route path="/expense/:id" element={<ExpenseDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
