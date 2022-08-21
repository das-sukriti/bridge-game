import { render, screen } from "@testing-library/react";
import { Table } from "./table";

test("all player names are loaded", () => {
  render(<Table />);
  let linkElement = screen.getByText(/North/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/South/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/East/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/West/i);
  expect(linkElement).toBeInTheDocument();
});

test("all child components are loaded", () => {
  render(<Table />);
  let playerGridEl = screen.getByTestId("playerGrid");
  expect(playerGridEl).toBeInTheDocument();
  expect(playerGridEl.childElementCount).toBe(5);
});

