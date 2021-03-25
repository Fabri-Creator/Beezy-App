const charactersBaseUrl =
  "https://gateway.marvel.com:443/v1/public/characters?";
const eventsBaseUrl = "https://gateway.marvel.com:443/v1/public/events?";
const publicKey = "dac735dd17aab89a5051de499dfeb63c";
//const privateKey = "1fde589c86d73f078789391f78060b5e873b3596";
const ts = 1;
// const stringToHash =
//   "11fde589c86d73f078789391f78060b5e873b3596dac735dd17aab89a5051de499dfeb63c";
const hash = "e7c44c2233e8b65123d9bff8b3c94bba";
//  Number of objects inside the response (array)
const limit = 6;

export const getCharacters = async () => {
  const response = await fetch(
    charactersBaseUrl +
      "limit=" +
      limit +
      "&ts=" +
      ts +
      "&apikey=" +
      publicKey +
      "&hash=" +
      hash
  );
  try {
    const { data } = await response.json();
    if (!data.results) {
      return null;
    } else if (data.results.length === 0) {
      return null;
    } else {
      return data.results;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificCharacter = async (superSearch) => {
  const response = await fetch(
    charactersBaseUrl +
      "nameStartsWith=" +
      superSearch +
      "&limit=" +
      limit +
      "&ts=" +
      ts +
      "&apikey=" +
      publicKey +
      "&hash=" +
      hash
  );

  try {
    const { data } = await response.json();
    if (!data.results) {
      return null;
    } else if (data.results.length === 0) {
      return null;
    } else {
      return data.results;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getEvents = async () => {
  const response = await fetch(
    eventsBaseUrl +
      "limit=" +
      limit +
      "&ts=" +
      ts +
      "&apikey=" +
      publicKey +
      "&hash=" +
      hash
  );
  try {
    const { data } = await response.json();
    if (!data.results) {
      return null;
    } else if (data.results.length === 0) {
      return null;
    } else {
      return data.results;
    }
  } catch (error) {
    console.log(error);
  }
};
