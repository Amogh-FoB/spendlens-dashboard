import { RATES } from "../../data/rates";

function WhatIfSlider({ eurRate, setEurRate, baseTotal, totalDifference }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 mt-8">
      <h2 className="text-xl font-semibold">
        What-if EUR Exchange Rate
      </h2>

      <p className="text-slate-500 mt-1">
        Simulate changes to the EUR/USD exchange rate.
      </p>

      <div className="mt-6">
        <input
          type="range"
          min="0.80"
          max="1.10"
          step="0.01"
          value={eurRate}
          onChange={(e) =>
            setEurRate(Number(e.target.value))
          }
          className="w-full"
        />

        <div className="flex justify-between mt-3 text-sm">
          <span>0.80</span>

          <span className="font-bold">
            Current: {eurRate.toFixed(2)}
          </span>

          <span>1.10</span>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Base assignment rate: {RATES.EUR}
        </p>
      </div>
      <div className="mt-4 rounded-lg bg-slate-100 p-4">
        <p className="text-sm text-slate-600">
          Base Total:
          <span className="font-semibold ml-1">
            {baseTotal.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </p>

        <p className="text-sm mt-2">
          Change:
          <span
            className={`ml-1 font-semibold ${totalDifference >= 0
                ? "text-green-600"
                : "text-red-600"
              }`}
          >
            {totalDifference >= 0 ? "+" : ""}
            {totalDifference.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </p>
      </div>
    </div>
  );
}

export default WhatIfSlider;