import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Displayer from "../Displayer";

describe("Displayer rendering", () => {
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
    expect(queryByTitle("header")).toHaveTextContent("MARVEL CHARACTERS LIST");
  });
});
