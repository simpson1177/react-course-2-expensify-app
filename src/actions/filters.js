export const setTextFilter = (text = "") => ({
  type: "SET_FILTER",
  text
});

export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

export const setStartDate = startDate => ({
  type: "START_DATE",
  startDate
});

export const setEndDate = endDate => ({
  type: "END_DATE",
  endDate
});
