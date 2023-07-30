export const debounce = (func: () => void, timeout: number = 200): () => void => {
  let id: ReturnType<typeof window['setTimeout']> | undefined;

  const cancelTimeout = (): void => {
    if (id) clearTimeout(id);
  }
  const debounced = (): void => {
    cancelTimeout();
    setTimeout(() => func(), timeout);
  };
  debounced.cancel = cancelTimeout;
  return debounced;
};
