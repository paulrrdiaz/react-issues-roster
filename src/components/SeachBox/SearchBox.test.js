import React from "react";
import { render, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import SearchBox from "./SearchBox";

test("should clear SearchBox after click Clear button", () => {
  const { getByLabelText, getByTestId } = render(<SearchBox />);
  const input = getByLabelText(/some troubles/i);

  user.type(input, "react");
  user.click(getByTestId("search-box-clear"));
  expect(input).toBeEmpty();
});
