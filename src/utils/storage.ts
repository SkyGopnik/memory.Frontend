export const storage = {
  set: (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    const storage = localStorage.getItem(key);

    return storage ? JSON.parse(storage) : undefined;
  }
};
