# 💸 Split Expense Tracker - Backend

A backend API system to help groups of people split expenses fairly and automatically calculate settlements. Inspired by popular apps like **Splitwise** and **Google Pay Bill Split**, this app allows users to track who paid what, view balances, and get simplified settlement instructions.

---

## 📌 Project Objective

This project aims to solve the common problem of managing shared expenses among a group of people. Whether it’s splitting rent among roommates, dividing trip costs with friends, or tracking event expenses, this app ensures fairness and transparency by calculating each person’s dues and contributions accurately.

---

## 🎯 Target Users

- Roommates (shared rent, utilities)
- Friends on trips or outings
- Families managing monthly budgets
- Colleagues sharing office or lunch costs

---

## 🛠️ Tech Stack

| Layer           | Technology              |
|----------------|--------------------------|
| Backend         | Node.js + Express.js     |
| Database        | MongoDB Atlas            |
| Deployment      | Railway / Render         |
| API Testing     | Postman                  |

---

## 🚀 Features

### ✅ Core Features
- **Expense Tracking**
  - Add expenses with amount, description, and payer
  - Automatic participant recognition
  - Edit or delete expenses
  - Choose how to split: equally, by percentage, or exact amount

- **Settlement Calculations**
  - See individual balances (owed/owes)
  - Simplified payment suggestions to minimize transactions

- **Data Validation**
  - Prevents invalid amounts, empty fields, or bad inputs
  - Uses proper HTTP status codes and error responses

---

## 🔌 API Endpoints

### 📁 Expense Management

| Method | Endpoint            | Description                    |
|--------|---------------------|--------------------------------|
| GET    | /expenses           | List all expenses              |
| POST   | /expenses           | Add a new expense              |
| PUT    | /expenses/:id       | Update an expense              |
| DELETE | /expenses/:id       | Delete an expense              |

### 💰 Settlements

| Method | Endpoint            | Description                                   |
|--------|---------------------|-----------------------------------------------|
| GET    | /balances           | Shows who owes/owed how much                  |
| GET    | /settlements        | Optimized list of "who should pay whom"       |
| GET    | /people             | List of all participants (from expenses)      |

---

## 📊 Sample Payloads

### ➕ Add Expense (POST `/expenses`)
```json
{
  "amount": 600,
  "description": "Dinner at restaurant",
  "paid_by": "Shantanu",
  "split_between": ["Shantanu", "Sanket", "Om"]
}
