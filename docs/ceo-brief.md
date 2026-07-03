# CEO Brief – SpendLens Expense Dashboard

## Executive Summary

During this sprint, I developed a working web-based expense dashboard that transforms a static dataset of multi-currency expenses into an interactive reporting tool. The dashboard converts all transactions into USD using a fixed exchange-rate snapshot, allowing spending across different currencies to be compared consistently.

In addition to summary metrics, the application allows users to search, sort, filter, and add expenses in real time. I also implemented a "What-if" analysis feature that allows users to simulate changes to the EUR/USD exchange rate and immediately observe the impact on spending. This demonstrates how currency fluctuations can affect financial reporting and planning.

The application has been deployed publicly and is ready for internal evaluation.

---

## Why This Matters to SpendLens

One of SpendLens' core goals is helping users understand spending across multiple currencies. This dashboard demonstrates that capability by providing a single, consistent view of expenses without requiring manual currency conversion.

Instead of reviewing spreadsheets and calculating exchange rates manually, finance teams can quickly identify spending patterns, compare categories, monitor high-spending merchants, and understand how exchange-rate movements influence overall expenditure.

The solution improves both visibility and usability while remaining simple enough to extend in future iterations.

---

## Key Trade-offs

### 1. Static data instead of backend storage

To meet the sprint timeline, I used the provided static dataset and stored newly added expenses only in application memory.

**Reason:** The assignment prioritised product thinking and user experience over backend implementation.

---

### 2. Focused analytics instead of advanced visualisations

I prioritised clear tables, summaries, filtering, and search rather than implementing charts or graphs.

**Reason:** These features provide immediate value while keeping the interface lightweight and allowing more time for core functionality.

---

### 3. Single-currency scenario analysis

The What-if Analysis currently allows adjustment of only the EUR/USD exchange rate.

**Reason:** This satisfied the stretch requirement while demonstrating a scalable approach that can later be extended to additional currencies.

---

## Priorities for the Next Sprint

### 1. Persistent Data Storage

Store expenses in a backend database so that newly added expenses remain available across sessions.

**Expected Impact**

Transforms the dashboard from a demonstration into a practical day-to-day expense management tool.

---

### 2. Richer Analytics

Introduce charts, trend analysis, monthly spending summaries, and merchant breakdowns.

**Expected Impact**

Helps users identify long-term spending behaviour and supports better financial decision-making.

---

### 3. Enhanced Currency Management

Support live exchange-rate updates, multiple adjustable currencies, and historical rate comparisons.

**Expected Impact**

Improves reporting accuracy and makes the What-if Analysis significantly more valuable for finance teams.

---

## Closing Remarks

The current dashboard delivers all required functionality while maintaining a clean and responsive user experience. The application has been designed with modular React components, making future enhancements straightforward. With persistent storage and richer analytics, this can evolve into a production-ready expense intelligence tool aligned with SpendLens' product vision.