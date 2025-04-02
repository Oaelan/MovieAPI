export const roundUpMovieScore = (value: number): number => {
  return Math.round(value * 10) / 10;
};
export const getRandomPage = () => {
  return Math.floor(Math.random() * 17) + 1; // 1~17 사이 랜덤 값
};
