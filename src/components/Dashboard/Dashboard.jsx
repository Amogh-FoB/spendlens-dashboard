import Header from "./Header";
import StatsCards from "./StatsCards";
import CategorySummary from "./CategorySummary";
import TopMerchants from "./TopMerchants";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import WhatIfSlider from "../WhatIfSlider/WhatIfSlider";

function Dashboard({ allSummary, summary, totalTransactions, expenses, selectedCategories, setSelectedCategories, setExpenses, eurRate, setEurRate, baseTotal, totalDifference, }) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

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
      <div className="grid lg:grid-cols-2 gap-6">
        <CategorySummary categories={summary?.categories} />
        <TopMerchants merchants={summary?.topMerchants} />
      </div>

      <section>
        <ExpenseTable
          expenses={expenses}
          eurRate={eurRate}
        />
      </section>

      <section>
        <AddExpenseForm
          setExpenses={setExpenses}
        />
      </section>

      <section>
        <WhatIfSlider
          eurRate={eurRate}
          setEurRate={setEurRate}
          baseTotal={baseTotal}
          totalDifference={totalDifference}
        />
      </section>

    </main>
  );
}

export default Dashboard;