import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("this tests an expense being removed", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123" });
});

test("this tests editing an expense", () => {
  const action = editExpense("123", { note: "this is my note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: { note: "this is my note" }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 109000,
    createdAt: 1000,
    note: "this was last months rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default values", () => {
  const defaultData = {
    description: "",
    note: " ",
    amount: 0,
    createdAt: 0
  };

  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...defaultData,
      id: expect.any(String)
    }
  });
});
