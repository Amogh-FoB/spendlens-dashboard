function CategorySummary({ categories }) {
    console.log("CategorySummary props:", { categories });
    return (
        <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">
                Category Summary
            </h2>

            <table className="w-full">
                <thead>
                    <tr className="border-b text-slate-500 text-sm">
                        <th className="text-center py-2">Category</th>
                        <th className="text-center">Count</th>
                        <th className="text-right">Total USD</th>
                        <th className="text-center">Largest Transaction</th>
                    </tr>
                </thead>

                <tbody>
                    {categories.map((category) => (
                        <tr
                            key={category.category}
                            className="border-b last:border-none"
                        >
                            <td className="py-5 font-medium">
                                {category.category}
                            </td>

                            <td className="text-center">
                                {category.transactionCount}
                            </td>

                            <td className="text-right font-semibold">
                                {category.totalUSD.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                            </td>

                            <td className="pl-4">
                                <div className="text-base font-semibold">
                                    {category.largestTransaction.merchant}
                                </div>

                                <div className="text-sm text-slate-500">
                                    {category.largestTransaction.usd.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                    })}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CategorySummary;