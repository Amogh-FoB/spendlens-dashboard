import { convertToUSD } from "./currency";

/**
 * Calculate all dashboard summary metrics
 * @param {Array} expenses
 * @returns {Object}
 */
export function calculateSummary(expenses) {
  const categoryMap = {};
  const merchantTotals = {};
  let overallTotal = 0;

  expenses.forEach((expense) => {
    const usd = convertToUSD(expense.amount, expense.currency);

    overallTotal += usd;

    // Merchant totals
    merchantTotals[expense.merchant] =
      (merchantTotals[expense.merchant] || 0) + usd;

    // Category summary
    if (!categoryMap[expense.category]) {
      categoryMap[expense.category] = {
        category: expense.category,
        transactionCount: 0,
        totalUSD: 0,
        largestTransaction: 0,
      };
    }

    categoryMap[expense.category].transactionCount++;
    categoryMap[expense.category].totalUSD += usd;

    if (usd > categoryMap[expense.category].largestTransaction) {
      categoryMap[expense.category].largestTransaction = usd;
    }
  });

  const categories = Object.values(categoryMap)
    .map((category) => ({
      ...category,
      totalUSD: Number(category.totalUSD.toFixed(2)),
      largestTransaction: Number(category.largestTransaction.toFixed(2)),
    }))
    .sort((a, b) => b.totalUSD - a.totalUSD);

  const topMerchants = Object.entries(merchantTotals)
    .map(([merchant, totalUSD]) => ({
      merchant,
      totalUSD: Number(totalUSD.toFixed(2)),
    }))
    .sort((a, b) => b.totalUSD - a.totalUSD)
    .slice(0, 3);

  return {
    overallTotal: Number(overallTotal.toFixed(2)),
    categories,
    topMerchants,
  };
}