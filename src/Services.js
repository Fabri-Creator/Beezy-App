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

export const get = async (base, nameStartsWith = null) => {
  let url =
    base +
    "limit=" +
    limit +
    "&ts=" +
    ts +
    "&apikey=" +
    publicKey +
    "&hash=" +
    hash;

  if (nameStartsWith) {
    url += `&nameStartsWith=${nameStartsWith}`;
  }

  const response = await fetch(url);

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

export const getCharacters = () => get(charactersBaseUrl);

export const getSpecificCharacter = (nameStartsWith) =>
  get(charactersBaseUrl, nameStartsWith);

export const getEvents = () => get(eventsBaseUrl);
