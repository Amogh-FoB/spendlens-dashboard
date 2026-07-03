# Edge Cases Analysis

## 1. Missing Exchange Rate

**What could go wrong**

A transaction contains a currency whose exchange rate is missing or `null`.

**Current Behaviour**

The application throws an error when an exchange rate is unavailable, preventing incorrect USD calculations.

**Correct Behaviour**

Display a user-friendly error message and skip the affected transaction until a valid exchange rate is available.

---

## 2. Empty Add Expense Form

**What could go wrong**

A user submits the form without entering all required fields.

**Current Behaviour**

The form validates required fields and displays an inline error message.

**Correct Behaviour**

Prevent submission and clearly highlight the missing fields.

---

## 3. Zero or Negative Expense Amount

**What could go wrong**

Users enter `0` or a negative amount.

**Current Behaviour**

Validation prevents zero or negative values from being submitted.

**Correct Behaviour**

Only allow positive expense values greater than zero.

---

## 4. Search Returns No Results

**What could go wrong**

A user searches for a merchant or category that does not exist.

**Current Behaviour**

The dashboard displays a "No expenses found" message along with a button to clear the search.

**Correct Behaviour**

Continue displaying the empty state until the search is cleared or modified.

---

## 5. Multiple Category Selection

**What could go wrong**

Users may want to filter multiple categories simultaneously.

**Current Behaviour**

The dashboard supports selecting multiple categories and updates the summary and table accordingly.

**Correct Behaviour**

Selections should remain active until explicitly deselected.

---

## 6. Extremely Large Expense Values

**What could go wrong**

Very large numbers may overflow table cells or become difficult to read.

**Current Behaviour**

Amounts are formatted using thousands separators to improve readability.

**Correct Behaviour**

Continue formatting values consistently and allow horizontal scrolling on smaller screens.

---

## 7. Special Characters in Merchant Names

**What could go wrong**

Merchant names may contain symbols, accented characters, or punctuation.

Examples:

- AT&T
- Café de Paris
- O'Reilly Media

**Current Behaviour**

Merchant names are displayed normally because React safely renders text.

**Correct Behaviour**

Continue treating merchant names as plain text without executing any embedded HTML or scripts.

---

## 8. Mobile Screen Width

**What could go wrong**

Tables and controls may not fit on smaller screens.

**Current Behaviour**

The dashboard uses responsive layouts and horizontal scrolling where required.

**Correct Behaviour**

Maintain usability without breaking the layout.

---

## 9. Dynamic EUR Exchange Rate Changes

**What could go wrong**

Changing the EUR rate should immediately update all affected calculations.

**Current Behaviour**

The What-if Analysis recalculates EUR-denominated expenses, category totals, overall totals, and merchant rankings in real time.

**Correct Behaviour**

All dependent values should remain synchronized whenever the exchange rate changes.

---

## 10. Sorting After Filtering and Searching

**What could go wrong**

Sorting could ignore active filters or search results.

**Current Behaviour**

Sorting is applied to the filtered dataset, ensuring that search, category filters, and sorting work together correctly.

**Correct Behaviour**

Users should always see the correctly filtered and sorted results regardless of the order in which actions are performed.