export const storage = {
  set: (key: string, value: unknown) => {
    localStorage.setItem(
      key,
      typeof value === "object" ? JSON.stringify(value) : String(value)
    );
  },
  get: (key: string): string | null => {
    return localStorage.getItem(key);
  }
};
