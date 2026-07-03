import { useMemo, useState } from "react";
import { convertToUSD } from "../../utils/currency";
import { Search } from "lucide-react";

function ExpenseTable({ expenses, eurRate }) {
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const sortedExpenses = useMemo(() => {

    const filtered = expenses.filter((expense) => {
      const query = searchTerm.toLowerCase();

      return (
        expense.merchant.toLowerCase().includes(query) ||
        expense.category.toLowerCase().includes(query) ||
        expense.currency.toLowerCase().includes(query)
      );
    });
    const sorted = [...filtered];
    sorted.sort((a, b) => {
      if (sortField === "date") {
        return sortDirection === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }

      if (sortField === "usd") {
        const usdA = convertToUSD(a.amount, a.currency, eurRate);
        const usdB = convertToUSD(b.amount, b.currency, eurRate);

        return sortDirection === "asc"
          ? usdA - usdB
          : usdB - usdA;
      }

      return 0;
    });

    return sorted;
  }, [expenses, sortField, sortDirection, eurRate, searchTerm]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  const badgeStyles = {
    Travel: "bg-blue-100 text-blue-700",
    Food: "bg-green-100 text-green-700",
    Software: "bg-purple-100 text-purple-700",
    Entertainment: "bg-orange-100 text-orange-700",
  };
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 hover:shadow-lg transition">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Expenses</h2>

        <div className="flex gap-3">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search merchant, category or currency..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-72 pl-10 pr-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => handleSort("date")}
            className={`px-4 py-2 rounded-full font-medium border transition ${sortField === "date"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }`}
          >
            Sort by Date{" "}
            {sortField === "date" && (
              <span className="ml-1">
                {sortDirection === "asc" ? "▲" : "▼"}
              </span>
            )}
          </button>

          <button
            onClick={() => handleSort("usd")}
            className={`px-4 py-2 rounded-full font-medium border transition ${sortField === "usd"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }`}
          >
            Sort by USD{" "}
            {sortField === "usd" && (
              <span className="ml-1">
                {sortDirection === "asc" ? "▲" : "▼"}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Table */}
      {sortedExpenses.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-xl font-semibold text-slate-700">
            No expenses found
          </p>

          <p className="mt-2 text-slate-500">
            Try another search or clear the filters.
          </p>

          <button
            onClick={() => setSearchTerm("")}
            className="mt-6 px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full table-fixed">
            <thead className="sticky top-0 bg-white z-10 border-b text-slate-500 uppercase text-sm tracking-wide">
              <tr>
                <th className="w-40 text-center px-4 py-3">Date</th>
                <th className="text-center px-4 py-3">Merchant</th>
                <th className="w-40 text-right px-4 py-3">Original</th>
                <th className="w-32 text-right px-4 py-3">USD</th>
                <th className="w-44 text-center px-4 py-3">Category</th>
              </tr>
            </thead>

            <tbody>
              {sortedExpenses.map((expense, index) => {
                const usd = convertToUSD(
                  expense.amount,
                  expense.currency,
                  eurRate
                );

                return (
                  <tr
                    key={expense.id}
                    className={`border-b last:border-none hover:bg-slate-50 transition ${index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                      }`}
                  >
                    {/* Date */}
                    <td className="px-4 py-4 text-center tabular-nums">
                      {new Date(expense.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    {/* Merchant */}
                    <td className="px-4 py-4 font-semibold text-slate-800">
                      {expense.merchant}
                    </td>

                    {/* Original Amount */}
                    <td className="px-4 py-4 text-right tabular-nums">
                      {expense.amount.toLocaleString()} {expense.currency}
                    </td>

                    {/* USD */}
                    <td className="px-4 py-4 text-right font-semibold tabular-nums">
                      {usd.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>

                    {/* Category */}
                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${badgeStyles[expense.category] ||
                          "bg-slate-100 text-slate-700"
                          }`}
                      >
                        {expense.category}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}</div>
  );
}

export default ExpenseTable;