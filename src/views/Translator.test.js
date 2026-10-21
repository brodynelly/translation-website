import React from "react";
import ReactDOM from "react-dom";
import Translator from "./Translator";

jest.mock("react-draggable", () => ({
  __esModule: true,
  default: ({ children }) => children,
}));

test("renders the translator without a provider credential", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <Translator originalArticle="hola mundo" resetApp={() => {}} />,
    container
  );

  expect(container.querySelector('[role="status"]').textContent).toContain(
    "Translation is disabled in this browser-only demo"
  );
  expect(container.textContent).toContain("original article");
  expect(container.textContent).toContain("hola");

  ReactDOM.unmountComponentAtNode(container);
});
