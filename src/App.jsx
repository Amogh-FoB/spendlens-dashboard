import { EXPENSES } from "./data/expenses";
import { calculateSummary } from "./utils/summary";
import Dashboard from "./components/Dashboard/Dashboard";
import { useMemo, useState } from "react";

import { RATES } from "./data/rates";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [expenses, setExpenses] = useState(EXPENSES);
  const [eurRate, setEurRate] = useState(RATES.EUR);
  const filteredExpenses = useMemo(() => {
    if (selectedCategories.length === 0) {
      return expenses;
    }

    return expenses.filter(expense =>
      selectedCategories.includes(expense.category)
    );
  }, [selectedCategories, expenses]);
  const baseSummary = calculateSummary(expenses);
  const allSummary = calculateSummary(
    expenses,
    eurRate
  );
  

  const summary = calculateSummary(
    filteredExpenses,
    eurRate
  );
  const totalDifference =
  summary.overallTotal - baseSummary.overallTotal;

  return (
    <div className="min-h-screen bg-slate-100">
      <Dashboard
        allSummary={allSummary}
        summary={summary}
        expenses={filteredExpenses}
        totalTransactions={filteredExpenses.length}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        setExpenses={setExpenses}
        eurRate={eurRate}
        setEurRate={setEurRate}
        baseTotal={baseSummary.overallTotal}
  totalDifference={totalDifference}
      />
    </div>
  );
}

export default App;