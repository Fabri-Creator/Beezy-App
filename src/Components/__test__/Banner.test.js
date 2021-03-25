import { render } from "@testing-library/react";

import Banner from "./../Banner";

describe("Banner img render", () => {
  test("Snapshot of Banner", () => {
    const { asFragment } = render(<Banner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
