import ExpenseApp from "./Components/ExpenseApp/ExpenseApp";
import './App.css'

function App() {
  return (
    <div className="App col-12 d-flex flex-column align-items-center bg-light">
      <header className="App-header">
        <h2 className="mt-4">Expense Tracker</h2>
      </header>
      <ExpenseApp/>
    </div>
  );
}

export default App;
