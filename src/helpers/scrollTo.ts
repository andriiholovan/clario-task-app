export const scrollTo = (y: number): void => {
  window.scroll({
    top: y,
    behavior: 'smooth'
  });
};
