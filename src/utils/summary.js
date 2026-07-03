import { convertToUSD } from "./currency";
import { RATES } from "../data/rates";

/**
 * Calculate all dashboard summary metrics
 * @param {Array} expenses
 * @returns {Object}
 */

export function calculateSummary(
  expenses,
  eurRate = RATES.EUR
) {
  const categoryMap = {};
  const merchantTotals = {};
  let overallTotal = 0;

  expenses.forEach((expense) => {
    const usd = convertToUSD(
  expense.amount,
  expense.currency,
  eurRate
);

    overallTotal += usd;

    merchantTotals[expense.merchant] =
      (merchantTotals[expense.merchant] || 0) + usd;

    if (!categoryMap[expense.category]) {
      categoryMap[expense.category] = {
        category: expense.category,
        transactionCount: 0,
        totalUSD: 0,
        largestTransaction: null,
      };
    }

    categoryMap[expense.category].transactionCount++;
    categoryMap[expense.category].totalUSD += usd;

    const currentLargest =
      categoryMap[expense.category].largestTransaction;

    if (!currentLargest || usd > currentLargest.usd) {
      categoryMap[expense.category].largestTransaction = {
        merchant: expense.merchant,
        usd,
      };
    }
  });

  const categories = Object.values(categoryMap)
    .map((category) => ({
      ...category,
      totalUSD: Number(category.totalUSD.toFixed(2)),
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