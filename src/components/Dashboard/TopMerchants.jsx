function TopMerchants({ merchants }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-xl font-semibold mb-4">
        Highest Spending Merchants
      </h2>

      <div className="space-y-4">
        {merchants.map((merchant, index) => (
          <div
            key={merchant.merchant}
            className="flex justify-between items-center border-b last:border-none pb-3"
          >
            <div>
              <p className="font-medium">
                #{index + 1} {merchant.merchant}
              </p>
            </div>

            <span className="font-bold">
              ${merchant.totalUSD.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopMerchants;