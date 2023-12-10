import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from '../read-input.js';
import { part1, part2 } from './solution.js';

describe('day10 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input 1', () => {
      const input = readInput('day10/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 4);
    });

    it('should return the correct value using the example input 2', () => {
      const input = readInput('day10/example-input-2');
      const result = part1(input);
      assert.strictEqual(result, 8);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day10/input');
      const result = part1(input);
      assert.strictEqual(result, 6714);
    });
  });

  describe.skip('part 2', () => {
    it('should return the correct value using the example input 3', () => {
      const input = readInput('day10/example-input-3');
      const result = part2(input);
      assert.strictEqual(result, 4);
    });

    it('should return the correct value using the example input 4', () => {
      const input = readInput('day10/example-input-4');
      const result = part2(input);
      assert.strictEqual(result, 4);
    });

    it('should return the correct value using the example input 5', () => {
      const input = readInput('day10/example-input-5');
      const result = part2(input);
      assert.strictEqual(result, 8);
    });

    it('should return the correct value using the example input 6', () => {
      const input = readInput('day10/example-input-6');
      const result = part2(input);
      assert.strictEqual(result, 10);
    });
  });
});
