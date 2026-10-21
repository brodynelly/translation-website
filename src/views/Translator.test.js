import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import Translator from "./Translator";

jest.mock("react-draggable", () => ({
  __esModule: true,
  default: ({ children }) => children,
}));

test("renders the translator without a provider credential", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  act(() => {
    root.render(<Translator originalArticle="hola mundo" resetApp={() => {}} />);
  });

  expect(container.querySelector('[role="status"]').textContent).toContain(
    "Translation is disabled in this browser-only demo"
  );
  expect(container.textContent).toContain("original article");
  expect(container.textContent).toContain("hola");

  act(() => root.unmount());
});
