# Expense-Tracker

# 💰 Personal Expense Tracker

A simple and interactive **Personal Expense Tracker** built with **HTML**, **CSS**, and **JavaScript**. This app allows users to log income and expenses, view their balance, and manage transactions efficiently. Bonus features include category filters and visual summaries using **Chart.js**.

---

## 🎯 Objective

Build a web-based expense tracker to:
- Log income and expenses
- Display current balance, total income, and total expenses
- Store transactions using localStorage for persistence
- Provide an intuitive and responsive UI

---

## 📷 Output Preview

- ➕ Add transactions via form
- 📊 Real-time balance update
- ❌ Delete any transaction
- 💾 Transactions saved in browser localStorage
- 🎯 Optional category filter & visual charts

---

## ✅ Features

### 🔹 Core Features

1. **Transaction Form**
   - Add new income or expense
   - Includes:
     - Description input
     - Amount input (positive for income, negative for expense)
     - Optional category input

2. **Display Totals**
   - Real-time calculation of:
     - Total Balance
     - Total Income
     - Total Expenses

3. **Transaction List**
   - Shows all transactions with amount and type
   - Includes a **delete button** to remove any transaction

4. **Persistence with localStorage**
   - Saves transaction data in browser memory
   - Automatically loads on page refresh

---

### 🌟 Bonus Features

- **Category Filter**  
  Filter transactions by category (e.g., Food, Rent, Travel)

- **Chart.js Integration**  
  Pie or bar chart to visualize income vs expenses or category distribution

---

## 💻 Tech Stack

- **HTML**: Structure of the tracker
- **CSS**: Styling and responsive layout
- **JavaScript**: App logic, state management, and localStorage
- **Chart.js (optional)**: To render visual insights

---

## 🛠 Development Guidelines

- Use `addEventListener()` for handling form submissions and delete actions
- Update totals dynamically based on the transaction array
- Store/retrieve transaction data using `localStorage.setItem()` and `getItem()`
- Use `filter()`, `reduce()`, and `map()` for data manipulation
- Render charts using Chart.js with updated data

---

## 📦 How to Use

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
2. Open index.html in a Browser

3. Add, View, and Manage Your Transactions
