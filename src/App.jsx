import { EXPENSES } from "./data/expenses";
import { calculateSummary } from "./utils/summary";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const summary = calculateSummary(EXPENSES);

  return (
    <div className="min-h-screen bg-slate-100">
      <Dashboard
  summary={summary}
  totalTransactions={EXPENSES.length}
  expenses={EXPENSES}
/>
    </div>
  );
}

export default App;