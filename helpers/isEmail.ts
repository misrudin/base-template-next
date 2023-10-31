export const isEmail = (text: string) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(text);
};
