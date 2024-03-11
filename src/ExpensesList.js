import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'

const ExpensesList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/expensesApp/api/expenses/')
            .then(response => { 
                setExpenses(response.data); 
                console.log(response.data);
            })
            .catch(error => console.error('Error fetching expenses:', error));
    }, [])

    return (
        <div className="expenses-list-container"> 
            <h2>Expense List</h2>
            <ul className="expenses-list"> 
                {expenses.map(expense => (
                    <li key={expense.id} className="expense-item"> 
                        <Link to={`/expense/${expense.id}`} className="expense-link">{expense.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpensesList;