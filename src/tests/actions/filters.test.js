import {
  setTextFilter,
  sortByDate,
  setStartDate,
  setEndDate,
  sortByAmount
} from "../../actions/filters";
import moment from "moment";

test("should generate set start date object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "END_DATE",
    endDate: moment(0)
  });
});

test("should set the text filter with input from user", () => {
  const action = setTextFilter("hello");
  expect(action).toEqual({
    type: "SET_FILTER",
    text: "hello"
  });
});

test("should set the text filter from default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_FILTER",
    text: ""
  });
});

test("should set the sort by date filter", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should set the sort by amount filter", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});
