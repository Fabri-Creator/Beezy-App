import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

import Displayer from "../Displayer";

const dataTest = [
  {
    id: 1011334,
    name: "Batman",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
  },
];

describe("Displayer rendering", () => {
  test("Snapshot of Displayer", () => {
    const { asFragment } = render(
      <Router>
        <Displayer dataList={dataTest} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("Finding name", () => {
    const { queryByTitle } = render(
      <Router>
        <Displayer dataList={dataTest} />
      </Router>
    );
    expect(queryByTitle("header").textContent).toMatch(
      "MARVEL CHARACTERS LIST"
    );
  });
});
