export const Types = {
  SET_ACTIVE_ISSUE: "activeIssue",
  SET_FILTERED_ISSUES: "filteredIssues",
  SET_SHOW_ISSUES: "showIssues",
  SET_USER_INPUT: "userInput",
  SET_CURRENT_ISSUE: "currentIssue",
};

export const initialState = {
  activeIssue: 0,
  filteredIssues: [],
  showIssues: false,
  userInput: "",
  currentIssue: null,
};

export const reducer = (state, action) => ({
  ...state,
  [action.type]: action.payload.value,
});

export const dispatchAll = (
  activeIssue,
  filteredIssues,
  showIssues,
  userInput,
  currentIssue,
  dispatch,
) => {
  dispatch({ type: Types.SET_ACTIVE_ISSUE, payload: { value: activeIssue } });
  dispatch({ type: Types.SET_FILTERED_ISSUES, payload: { value: filteredIssues } });
  dispatch({ type: Types.SET_SHOW_ISSUES, payload: { value: showIssues } });
  dispatch({ type: Types.SET_USER_INPUT, payload: { value: userInput } });
  dispatch({ type: Types.SET_CURRENT_ISSUE, payload: { value: currentIssue } });
};
