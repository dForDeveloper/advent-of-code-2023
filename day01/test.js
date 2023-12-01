import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from "../read-input.js";
import main from "./solution.js";

describe('day01 solution', () => {
  it('should return the correct value using the part 1 example input', () => {
    const input = readInput('day01/example-input-1');
    const result = main(input);
    assert.strictEqual(result, 142);
  });

  it('should return the correct value using the part 2 example input', () => {
    const input = readInput('day01/example-input-2');
    const result = main(input);
    assert.strictEqual(result, 281);
  });
});