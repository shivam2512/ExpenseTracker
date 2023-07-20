import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);
  const clickHandler = () =>
  {
    setTitle('Updated !!');
   console.log(title);
  };
  const ExpenseHandler = (props) =>
  {
    setExpense('100');
    console.log(expense);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expense}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={ExpenseHandler}>Expense</button>
    </Card>
   );
}

export default ExpenseItem;