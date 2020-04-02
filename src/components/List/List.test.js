import React from "react";
import { render } from "@testing-library/react";
import List from "./List";
import { filteredIssues } from "./List.mock";

test("rendering List component without props", () => {
  const { getByTestId } = render(<List />);
  expect(getByTestId("list-empty")).toHaveTextContent(/no issues/i);
});

test("rendering List component with props", () => {
  const props = { activeIssue: 0, filteredIssues, onClick: () => {} };
  const { getByTestId, queryByTestId } = render(<List {...props} />);

  expect(queryByTestId("list-empty")).toBeNull();
  expect(getByTestId("list")).toBeInTheDocument();
});
