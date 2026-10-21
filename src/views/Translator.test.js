import React from "react";
import { render, screen } from "@testing-library/react";
import Translator from "./Translator";

jest.mock("react-draggable", () => ({
  __esModule: true,
  default: ({ children }) => children,
}));

test("renders the translator without a provider credential", () => {
  render(<Translator originalArticle="hola mundo" resetApp={() => {}} />);

  expect(screen.getByRole("status").textContent).toContain(
    "Translation is disabled in this browser-only demo"
  );
  expect(screen.getByText("original article")).toBeTruthy();
  expect(screen.getByText("hola")).toBeTruthy();
});
