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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.merchant ||
      !form.amount ||
      !form.date
    ) {
      alert("Please fill all required fields.");
      return;
    }

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
    <div className="bg-white rounded-xl shadow-sm border p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-6">
        Add Expense
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-5 gap-4"
      >
        <input
          type="text"
          name="merchant"
          placeholder="Merchant"
          value={form.merchant}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <select
          name="currency"
          value={form.currency}
          onChange={handleChange}
          className="border rounded-lg p-2"
        >
          {Object.keys(RATES).map((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency}
            </option>
          ))}
        </select>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border rounded-lg p-2"
        >
          <option>Travel</option>
          <option>Food</option>
          <option>Software</option>
          <option>Entertainment</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 md:col-span-5"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpenseForm;