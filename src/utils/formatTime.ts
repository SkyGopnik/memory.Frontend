export const formatTime = (timeInSeconds: number): string => {
  const date = new Date(timeInSeconds * 1000);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
