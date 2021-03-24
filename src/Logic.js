export const orderByAlpha = (list) => {
  const newOrder = [...list].reverse(list.title);
  console.log("sort", newOrder);
  return newOrder;
};
