export const isPalindrome = (word: string): boolean => {
  // inverter a string
  const reversed = word.split("").reverse().join("");
  // comparar original com invertida
  return word === reversed;
};