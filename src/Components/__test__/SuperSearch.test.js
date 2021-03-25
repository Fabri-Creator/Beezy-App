import { render, fireEvent } from "@testing-library/react";

import SuperSearch from "./../SuperSearch";

it("Input check", () => {
  const { queryByTitle } = render(<SuperSearch />);
  const inputSelected = queryByTitle("inputTest");
  expect(inputSelected).toBeTruthy();
});

describe("Button click", () => {
  it("clickButton", () => {
    const { queryByTitle } = render(<SuperSearch />);
    const buttontSelected = queryByTitle("buttonTest");
    const inputSelected = queryByTitle("inputTest");
    expect(inputSelected.nodeValue).toBe(null);
    fireEvent.click(buttontSelected);
    expect(inputSelected.nodeValue).toBe("");
  });
});
