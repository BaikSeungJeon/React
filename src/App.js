import ExpenseItem  from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car insurance',
      amount: 5000.00,
      date: new Date(2022, 2, 1)
    },
    {
      id: 'e2',
      title: 'TV',
      amount: 2000.00,
      date: new Date(2022, 2, 1)
    },
    {
      id: 'e3',
      title: 'Mac Book',
      amount: 1000.00,
      date: new Date(2022, 2, 1)
    },
    {
      id: 'e4',
      title: 'iPhone Case',
      amount: 1000.00,
      date: new Date(2022, 2, 1)
    }
  ];

  return (
    <div>
      <h1>Study React!</h1>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
