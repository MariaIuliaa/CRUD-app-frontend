import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'; 

const ExpenseDetail = () => {
  const [expense, setExpense] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/expensesApp/api/expenses/${id}/`).then(response => { 
        setExpense(response.data); 
        console.log(response.data);
    })
    .catch(error => console.error('Error fetching expenses:', error));
  }, [id]);

  return (
    <div className="expense-detail-container"> 
      <h2>Expense Detail</h2>
      <p><strong>Amount:</strong> {expense.amount}</p>
      <p><strong>Category:</strong> {expense.category}</p>
      <p><strong>Date:</strong> {expense.date}</p>
      <p><strong>Description:</strong> {expense.description}</p>
      <Link to="/" className="back-link">Back to Expenses</Link> 
    </div>
  );
};

export default ExpenseDetail;
