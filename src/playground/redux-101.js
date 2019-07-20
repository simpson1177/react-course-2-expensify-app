import { createStore } from "redux";

//action generators

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy: incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy: decrementBy
  };
};

const resetCount = () => {
  return {
    type: "RESET"
  };
};

const setCount = ({ count } = {}) => {
  return {
    type: "SET",
    count: count
  };
};

//Reducers
//1 reducers are pure functions

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "SET":
      return { count: action.count };
    case "RESET":
      return { count: (state.count = 0) };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());
store.dispatch(setCount({ count: 101 }));
