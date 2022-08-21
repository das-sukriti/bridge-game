import { render, screen } from "@testing-library/react";
import { Player } from "./player";

test("Player is loaded", () => {
  const {queryAllByAltText} = render(
    <Player name="testName"></Player>
  );
  expect(queryAllByAltText(/Player/i)).toBeTruthy();
});


