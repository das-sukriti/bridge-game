import { render, screen } from "@testing-library/react";
import { CardStack } from "./card-stack";

test("Back image of single card is loaded", () => {
  render(<CardStack />);
  let linkElement = screen.getAllByAltText(/Card back/i);
  expect(linkElement.length).toBe(1);
});