import { RATES } from "../data/rates";

export function convertToUSD(amount, currency) {
  const rate = RATES[currency];

  if (rate === undefined || rate === null) {
    throw new Error(`Exchange rate missing for ${currency}`);
  }

  return Number((amount / rate).toFixed(2));
}