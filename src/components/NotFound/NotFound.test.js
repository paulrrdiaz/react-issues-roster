import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

test("renders 'Go Home' and 'you're drunk' messages", () => {
  const { getByText } = render(<NotFound />);
  expect(getByText(/go home/i)).toBeInTheDocument();
  expect(getByText(/drunk/i)).toBeInTheDocument();
});
