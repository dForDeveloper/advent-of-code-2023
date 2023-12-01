import readInput from "../read-input.js";

const input = readInput();

const solution = splitInput => {
  let firstNumber, lastNumber, finalNumber, result = 0;

  splitInput.forEach(inputString => {
    const splitInputString = inputString.trim().split('');
    const reversedSplitInputString = [...splitInputString].reverse();

    for (const char of splitInputString) {
      if (Number(char)) {
        firstNumber = char;
        break;
      }
    }

    for (const char of reversedSplitInputString) {
      if (Number(char)) {
        lastNumber = char;
        break;
      }
    }

    if (firstNumber) {
      finalNumber = Number(`${firstNumber}${lastNumber}`);
      result += finalNumber;
    }
  });
  return result;
}

console.log(solution(input));