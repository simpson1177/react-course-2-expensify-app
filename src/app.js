import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 111100, createdAt: 1000 })
);

store.dispatch(
  addExpense({ description: "Gas Bill", amount: 1300, createdAt: 1004 })
);

store.dispatch(
  addExpense({ description: "Rent", amount: 1600, createdAt: 10000 })
);

//store.dispatch(setTextFilter("bill"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//store.dispatch(setTextFilter("water"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
