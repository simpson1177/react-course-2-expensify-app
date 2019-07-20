import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//EpensesReducer

//Timestamps

//GET VISIBLE EXPENSES

//STORE

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 1100, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);
/* 
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 })); */

//store.dispatch(setTextFilter("re"));

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));
//store.dispatch(setEndDate());

const demoState = {
  expenses: [
    {
      id: "adffff",
      descriptions: "January Rent",
      note: "This was final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
