let form = document.getElementById("expense-form");
let nameInput = document.getElementById("name");
let amountInput = document.getElementById("amount");
let categoryInput = document.getElementById("category");
let dateInput = document.getElementById("date");
let expenseList = document.getElementById("expense-list");
let totalDisplay = document.getElementById("total");
let filterInput = document.getElementById("filter");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let isEditing = false;
let editingIndex = null;

// Chart.js Setup
let ctx = document.getElementById("expenseChart").getContext("2d");
let expenseChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Food", "Transport", "Utilities", "Other"],
    datasets: [{
      label: "Category-wise Expense",
      data: [0, 0, 0, 0],
      backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"]
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Expense Breakdown by Category"
      },
      legend: {
        position: "bottom"
      }
    }
  }
});

// Update Chart
function updateChart() {
  let totals = {
    Food: 0,
    Transport: 0,
    Utilities: 0,
    Other: 0
  };

  for (let exp of expenses) {
    if (totals.hasOwnProperty(exp.category)) {
      totals[exp.category] += exp.amount;
    }
  }

  expenseChart.data.datasets[0].data = [
    totals.Food,
    totals.Transport,
    totals.Utilities,
    totals.Other
  ];

  expenseChart.update();
}

// Render Expenses Table
function renderExpenses(filter = "All") {
  expenseList.innerHTML = "";
  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    let exp = expenses[i];

    if (filter === "All" || exp.category === filter) {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${exp.name}</td>
        <td>$${exp.amount.toFixed(2)}</td>
        <td>${exp.category}</td>
        <td>${exp.date}</td>
        <td>
          <button onclick="editExpense(${i})">Edit</button>
          <button onclick="deleteExpense(${i})">Delete</button>
        </td>
      `;
      expenseList.appendChild(row);
      total += exp.amount;
    }
  }

  totalDisplay.textContent = total.toFixed(2);
  updateChart();
}

// Add or Update Expense
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let expense = {
    name: nameInput.value,
    amount: parseFloat(amountInput.value),
    category: categoryInput.value,
    date: dateInput.value
  };

  if (isEditing) {
    expenses[editingIndex] = expense;
    isEditing = false;
    editingIndex = null;
    form.querySelector("button[type='submit']").textContent = "Add Expense";
  } else {
    expenses.push(expense);
  }

  localStorage.setItem("expenses", JSON.stringify(expenses));
  form.reset();
  renderExpenses(filterInput.value);
});

// Delete
function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses(filterInput.value);
}

// Edit
function editExpense(index) {
  let exp = expenses[index];
  nameInput.value = exp.name;
  amountInput.value = exp.amount;
  categoryInput.value = exp.category;
  dateInput.value = exp.date;

  isEditing = true;
  editingIndex = index;
  form.querySelector("button[type='submit']").textContent = "Update Expense";
}

// Filter
filterInput.addEventListener("change", function () {
  renderExpenses(this.value);
});

// Initialize
renderExpenses();
