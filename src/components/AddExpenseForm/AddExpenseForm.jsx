import { useState } from "react";
import { RATES } from "../../data/rates";

function AddExpenseForm({ setExpenses }) {
  const [form, setForm] = useState({
    merchant: "",
    amount: "",
    currency: "USD",
    category: "Travel",
    date: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });

  setError("");
};

  const handleSubmit = (e) => {
    e.preventDefault();

if (
  !form.merchant ||
  !form.amount ||
  Number(form.amount) <= 0 ||
  !form.date
) {
  setError("Please enter valid expense details.");
  setSuccess("");
  return;
}
    setError("");
    setSuccess("Expense added successfully!");
    setTimeout(() => {
  setSuccess("");
}, 3000);

    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now(),
        merchant: form.merchant,
        amount: Number(form.amount),
        currency: form.currency,
        category: form.category,
        date: form.date,
      },
    ]);
    
    setForm({
      merchant: "",
      amount: "",
      currency: "USD",
      category: "Travel",
      date: "",
    });


  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-3xl font-bold mb-6">
        Add New Expense
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {/* Merchant */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-slate-600 mb-2">
            Merchant
          </label>

          <input
            type="text"
            name="merchant"
            placeholder="e.g. Starbucks"
            value={form.merchant}
            onChange={handleChange}
            className="border border-slate-300 r\ounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-slate-600 mb-2">
            Amount
          </label>

          <input
            type="number"
            name="amount"
            placeholder="0.00"
            value={form.amount}
            onChange={handleChange}
            className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
min="0.01"
step="0.01"
          />
        </div>

        {/* Currency */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-slate-600 mb-2">
            Currency
          </label>

          <select
            name="currency"
            value={form.currency}
            onChange={handleChange}
            className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(RATES).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-slate-600 mb-2">
            Category
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Travel</option>
            <option>Food</option>
            <option>Software</option>
            <option>Entertainment</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-slate-600 mb-2">
            Date
          </label>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-xl py-3 hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            + Add Expense
          </button>
        </div>
      </form>
      {error && (
        <p className="mt-4 text-red-600 font-medium">
          {error}
        </p>
      )}

      {success && (
        <p className="mt-4 text-green-600 font-medium">
          ✅ {success}
        </p>
      )}
    </div>
  );
}

export default AddExpenseForm;