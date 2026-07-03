function StatsCards({ summary, totalTransactions }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 hover:shadow-lg transition">

                <p className="uppercase tracking-wide text-xs text-slate-500 text-sm">
                    Overall Spend
                </p>

                <h2 className="text-4xl font-bold mt-2">
                    {summary.overallTotal.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
                </h2>

            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 hover:shadow-lg transition">

                <p className="uppercase tracking-wide text-xs text-slate-500 text-sm">
                    Transactions
                </p>

                <h2 className="text-4xl font-bold mt-2">
                    {totalTransactions}
                </h2>

            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 hover:shadow-lg transition">

                <p className="uppercase tracking-wide text-xs text-slate-500 text-sm">
                    Categories
                </p>

                <h2 className="text-4xl font-bold mt-2">
                    {summary.categories.length}
                </h2>

            </div>

        </div>
    );
}

export default StatsCards;