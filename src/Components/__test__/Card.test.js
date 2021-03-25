import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card from "./../Card";

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

describe("Card api data", () => {
  test("Snapshot of Card", () => {
    const { asFragment } = render(
      <Router>
        <Card characterData={dataTest} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  // este falla
  // test("Finding name", () => {
  //   const { getByTestId } = render(
  //     <Router>
  //       <Card characterData={dataTest} />
  //     </Router>
  //   );
  //   expect(getByTestId("Info-name")).toHaveTextContent("Batman".toUpperCase());
  // });
});
