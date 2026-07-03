# SpendLens – Expense Intelligence Dashboard

SpendLens is a React-based expense analytics dashboard that helps users analyze transactions across multiple currencies. It provides interactive summaries, spending insights, dynamic exchange-rate simulation, and an intuitive interface for exploring financial data.

## Live Demo

🔗 [Vercel URL](https://spendlens-dashboard-tfa4.vercel.app/)

## GitHub Repository

🔗 [Github Respositry](https://github.com/Amogh-FoB/spendlens-dashboard)

---

## Features

### Dashboard Overview
- Total spending in USD
- Total number of transactions
- Category-wise spending summary
- Top spending merchants

### Expense Management
- Add new expenses
- Form validation
- Success and error messages
- Automatic dashboard updates

### Search & Filtering
- Search by:
  - Merchant
  - Category
  - Currency
- Multi-category filtering
- Empty state for no search results

### Sorting
- Sort by Date
- Sort by USD amount
- Ascending/Descending toggle

### What-if Analysis
- Interactive EUR exchange rate slider
- Dashboard recalculates values instantly
- Enables scenario-based spending analysis

### UI Improvements
- Responsive layout
- Modern dashboard design
- Colored category badges
- Zebra-striped expense table
- Sticky table header
- Search icon
- Improved typography and spacing

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

---

## Project Structure

```text
src/
│
├── components/
│   ├── Dashboard/
│   ├── ExpenseTable/
│   ├── AddExpenseForm/
│   ├── CategoryFilter/
│   └── ...
│
├── data/
│   ├── expenses.js
│   └── rates.js
│
├── utils/
│   ├── currency.js
│   └── summary.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/Amogh-FoB/spendlens-dashboard
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## Assumptions

- USD is treated as the base reporting currency.
- Exchange rates are provided through the supplied dataset.
- The What-if Analysis modifies only the EUR exchange rate while other currencies remain unchanged.
- Expenses are stored in client-side state and are not persisted after page refresh.

---

## Design Decisions

- Used React Hooks (`useState`, `useMemo`) for efficient state management.
- Memoized expensive calculations to improve performance.
- Implemented reusable components for maintainability.
- Used Tailwind CSS to rapidly build a responsive and consistent UI.
- Added multiple UX improvements including search, validation, empty states, and responsive layouts.

---

## Future Improvements

- Edit/Delete expenses
- Charts and analytics
- CSV/PDF export
- Persistent backend storage
- Authentication
- Multiple exchange-rate simulations

---

## License

This project was developed as part of a frontend assessment.