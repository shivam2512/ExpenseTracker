import ExpenseItem from './components/ExpenseItem';
function App() {
  
    const expenses = [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
        loc: 'AAA',
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),loc: 'BBB'},
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
        loc: 'CCC',
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
        loc: 'DDD',
      },
    ];
  // return (
  //   <div className="App">
  //     <h2>Let's Get Started</h2>
  //    <ExpenseItem
  //     title={expenses[0].title}
  //     amount={expenses[0].amount}
  //     date={expenses[0].date}
  //     loc={expenses[0].loc}
  //     ></ExpenseItem>
  //    <ExpenseItem
  //     title={expenses[1].title}
  //     amount={expenses[1].amount}
  //     date={expenses[1].date}
  //     loc={expenses[1].loc}>
  //    </ExpenseItem>
  //    <ExpenseItem
  //     title={expenses[2].title}
  //     amount={expenses[2].amount}
  //     date={expenses[2].date}
  //     loc={expenses[2].loc}>
  //    </ExpenseItem>
  //    <ExpenseItem
  //     title={expenses[3].title}
  //     amount={expenses[3].amount}
  //     date={expenses[3].date}
  //     loc={expenses[3].loc}>
  //    </ExpenseItem>
  //   </div>
  // );
  return (
    <div className="App">
      <h2>Let's Get Started</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          loc={expense.loc}
        ></ExpenseItem>
      ))}
    </div>
  );
  
}

export default App;
