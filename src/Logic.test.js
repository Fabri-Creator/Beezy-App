import { orderByAlpha } from "./Logic";

const arrayTest = [
  {
    id: 1011334,
    name: "Batman",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
  },
  {
    id: 1010000,
    name: "Superman",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/666fecbbb9784",
      extension: "jpg",
    },
  },
];

const arrayTestResult = [
  {
    id: 1010000,
    name: "Superman",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/666fecbbb9784",
      extension: "jpg",
    },
  },
  {
    id: 1011334,
    name: "Batman",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
  },
];

test("Reverse array titles", () => {
  expect(orderByAlpha(arrayTest)).toStrictEqual(arrayTestResult);
});
