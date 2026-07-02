import { EXPENSES } from "./data/expenses";
import { calculateSummary } from "./utils/summary";
import Dashboard from "./components/Dashboard/Dashboard";
import { useMemo, useState } from "react";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredExpenses = useMemo(() => {
    if (selectedCategories.length === 0) {
      return EXPENSES;
    }

    return EXPENSES.filter(expense =>
      selectedCategories.includes(expense.category)
    );
  }, [selectedCategories]);

  const allSummary = calculateSummary(EXPENSES);
const summary = calculateSummary(filteredExpenses);

  return (
    <div className="min-h-screen bg-slate-100">
      <Dashboard
      allSummary={allSummary}
        summary={summary}
        expenses={filteredExpenses}
        totalTransactions={filteredExpenses.length}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </div>
  );
}

export default App;