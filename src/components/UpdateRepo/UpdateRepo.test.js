import React from "react";
import { useNavigate } from "@reach/router";
import user from "@testing-library/user-event";
import { render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import UpdateRepo from "./UpdateRepo";

jest.mock("@reach/router", () => ({
  useNavigate: jest.fn(),
}));

test("rendering UpdateRepo component and mounting label and input element", () => {
  const { getByLabelText } = render(<UpdateRepo />);
  const input = getByLabelText(/update repo/i);

  expect(input).toHaveAttribute("type", "text");
});

test("entering an invalid value shows an error message", () => {
  const { getByLabelText, getByTestId, getByRole } = render(<UpdateRepo />);
  const input = getByLabelText(/update repo/i);
  const form = getByTestId("update-repo-form");

  user.type(input, "some/weird/url");
  fireEvent.submit(form);
  expect(getByRole("alert")).toHaveTextContent(/do better/i);
});

test("making a11y happy", async () => {
  const { container } = render(<UpdateRepo />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
