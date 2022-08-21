import { render, screen } from "@testing-library/react";
import { FlippedCards } from "./flipped-cards";

test("Back image 13 cards are loaded", () => {
  const {queryAllByAltText} = render(
    <FlippedCards name="testName"></FlippedCards>
  );
  expect(queryAllByAltText(/Card back/i)).toBeTruthy();
  expect(queryAllByAltText(/Card back/i).length).toBe(13);
});