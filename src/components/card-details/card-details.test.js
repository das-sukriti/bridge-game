import { render, screen } from "@testing-library/react";
import { CardDetails } from "./card-details";

test("Point details are loaded", () => {
  render(<CardDetails />);
  let qEl = screen.getAllByText(/Queen/i);
  let kEl = screen.getAllByText(/King/i);
  let jEl = screen.getAllByText(/Jack/i);
  let aEl = screen.getAllByText(/Ace/i);
  let totalEl = screen.getAllByText(/Total Points/i);
  expect(qEl).toBeTruthy();
  expect(kEl).toBeTruthy();
  expect(jEl).toBeTruthy();
  expect(aEl).toBeTruthy();
  expect(totalEl).toBeTruthy();
});