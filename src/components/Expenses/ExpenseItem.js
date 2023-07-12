import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const clickHandler = () =>
  {
    console.log("Clicked !!");
  };
  const DeleteHandler = () =>
  {
    console.log("Delete Clicked !!");
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={DeleteHandler}>Delete Expense</button>
    </Card>
   );
}

export default ExpenseItem;