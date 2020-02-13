export const shuffle = (list) => {
  const copy = [...list];
  let i = copy.length;
  let temp = null;
  let rI = null;

  while (i !== 0) {
    rI = Math.floor(Math.random() * i);
    i--;
    temp = copy[i];
    copy[i] = copy[rI];
    copy[rI] = temp;
  }
  return copy;
};
