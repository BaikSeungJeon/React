import Expenses from "./components/Expenses";

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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
