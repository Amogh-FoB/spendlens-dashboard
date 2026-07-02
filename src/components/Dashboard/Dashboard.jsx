import Header from "./Header";
import StatsCards from "./StatsCards";
import CategorySummary from "./CategorySummary";
import TopMerchants from "./TopMerchants";
import ExpenseTable from "../ExpenseTable/ExpenseTable";

function Dashboard({ summary, totalTransactions, expenses }) {
  return (
    <main className="max-w-7xl mx-auto p-8">

      <Header />

      <StatsCards
        summary={summary}
        totalTransactions={totalTransactions}
      />

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <CategorySummary categories={summary.categories} />

        <TopMerchants merchants={summary.topMerchants} />

        <ExpenseTable expenses={expenses} />

      </div>

    </main>
  );
}

export default Dashboard;