import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from '../read-input.js';
import { part1 } from './solution.js';

describe('day11 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input 1', () => {
      const input = readInput('day11/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 374);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day11/input');
      const result = part1(input);
      assert.strictEqual(result, 9623138);
    });
  });
});
