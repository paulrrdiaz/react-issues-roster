import React, { useReducer } from "react";
import List from "components/List";
import Details from "components/Details";
import { Close } from "components/Icons";
import { Input, Label } from "components/Form";
import { Types, initialState, reducer, dispatchAll } from "./SearchBox.reducer";
import { CloseWrapper } from "./SearchBox.styles";

export default ({ data: issues = [], currentRepo }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clear = () => {
    dispatchAll(0, [], false, "", null, dispatch);
  };

  const onChange = e => {
    const userInput = e.target.value;
    const filteredIssues = issues.filter(
      ({ title }) => title.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );

    dispatchAll(0, filteredIssues, true, userInput, null, dispatch);
  };

  const onClick = e => {
    const { filteredIssues } = state;
    const index = e.currentTarget.getAttribute("data-index");

    dispatchAll(0, [], false, "", filteredIssues[index], dispatch);
  };

  const onKeyDown = e => {
    const { activeIssue, filteredIssues } = state;

    switch (e.keyCode) {
      case 13: {
        dispatchAll(0, [], false, "", filteredIssues[activeIssue], dispatch);
        break;
      }
      case 38: {
        activeIssue &&
          dispatch({ type: Types.SET_ACTIVE_ISSUE, payload: { value: activeIssue - 1 } });
        break;
      }
      case 40: {
        const isLastOne = activeIssue + 1 === filteredIssues.length;
        console.log(isLastOne);

        !isLastOne &&
          dispatch({ type: Types.SET_ACTIVE_ISSUE, payload: { value: activeIssue + 1 } });
        break;
      }
      case 27: {
        clear();
        break;
      }
      default:
        break;
    }
  };

  const { showIssues, userInput, currentIssue } = state;
  const showList = showIssues && userInput;
  const showDetails = !showIssues && currentIssue;

  return (
    <>
      <div>
        <Label htmlFor="search-box">
          <small data-testid="current-repo">Current repo: {currentRepo}</small>
          Do you want some troubles...?
        </Label>
        <div className="relative">
          <Input
            id="search-box"
            type="text"
            placeholder="If so... search for them..."
            value={userInput}
            onKeyDown={onKeyDown}
            onChange={onChange}
          />
          {(showList || showDetails) && (
            <CloseWrapper data-testid="search-box-clear" onClick={clear}>
              <Close color="rgb(231, 76, 60)" width="20px" />
            </CloseWrapper>
          )}
        </div>
      </div>
      {showList && <List {...state} onClick={onClick} />}
      {showDetails && <Details {...currentIssue} />}
    </>
  );
};
