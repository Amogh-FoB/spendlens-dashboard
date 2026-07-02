import Header from "./Header";
import StatsCards from "./StatsCards";
import CategorySummary from "./CategorySummary";
import TopMerchants from "./TopMerchants";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";

function Dashboard({ allSummary,summary, totalTransactions, expenses, selectedCategories, setSelectedCategories, setExpenses }) {
  return (
    <main className="max-w-7xl mx-auto p-8">

      <Header />

      <StatsCards
        summary={summary}
        totalTransactions={totalTransactions}
      />
      <CategoryFilter
        categories={allSummary.categories}
        selected={selectedCategories}
        onSelect={setSelectedCategories}
      />
      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <CategorySummary categories={summary.categories} />

        <TopMerchants merchants={summary.topMerchants} />

        <ExpenseTable expenses={expenses} />

        <AddExpenseForm setExpenses={setExpenses} />

      </div>

    </main>
  );
}

export default Dashboard;