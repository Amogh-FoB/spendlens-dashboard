import { EXPENSES } from "./data/expenses";
import { calculateSummary } from "./utils/summary";

function App() {
  const summary = calculateSummary(EXPENSES);

  return (
    <div className="p-8">
      <pre>{JSON.stringify(summary, null, 2)}</pre>
    </div>
  );
}

export default App;