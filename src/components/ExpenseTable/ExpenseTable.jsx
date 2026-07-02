import { useMemo, useState } from "react";
import { convertToUSD } from "../../utils/currency";

function ExpenseTable({ expenses }) {
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("asc");

  const sortedExpenses = useMemo(() => {
    const sorted = [...expenses];

    sorted.sort((a, b) => {
      if (sortField === "date") {
        return sortDirection === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }

      if (sortField === "usd") {
        const usdA = convertToUSD(a.amount, a.currency);
        const usdB = convertToUSD(b.amount, b.currency);

        return sortDirection === "asc"
          ? usdA - usdB
          : usdB - usdA;
      }

      return 0;
    });

    return sorted;
  }, [expenses, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Expenses</h2>

        <div className="space-x-2">
          <button
            onClick={() => handleSort("date")}
            className="px-3 py-2 rounded-lg border hover:bg-slate-100"
          >
            Sort by Date
          </button>

          <button
            onClick={() => handleSort("usd")}
            className="px-3 py-2 rounded-lg border hover:bg-slate-100"
          >
            Sort by USD
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-slate-600">
              <th className="text-left py-3">Date</th>
              <th className="text-left">Merchant</th>
              <th className="text-right">Original</th>
              <th className="text-right">USD</th>
              <th className="text-left">Category</th>
            </tr>
          </thead>

          <tbody>
            {sortedExpenses.map((expense) => {
              const usd = convertToUSD(
                expense.amount,
                expense.currency
              );

              return (
                <tr
                  key={expense.id}
                  className="border-b last:border-none hover:bg-slate-50"
                >
                  <td className="py-3">{expense.date}</td>

                  <td>{expense.merchant}</td>

                  <td className="text-right">
                    {expense.amount.toLocaleString()}{" "}
                    {expense.currency}
                  </td>

                  <td className="text-right">
                    {usd.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>

                  <td>{expense.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseTable;