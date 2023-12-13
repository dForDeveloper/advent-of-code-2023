import readInput from '../read-input.js';

const expandInput = (input) => {
  const emptyRowIndexes = new Set();
  const columnsWithHashes = new Set();

  input.forEach((line, i) => {
    const matches = Array.from(line.matchAll(/#/g));
    if (!matches.length) {
      emptyRowIndexes.add(i);
    } else {
      matches.forEach(match => columnsWithHashes.add(match.index));
    }
  });

  return input.reduce((expandedInput, line, i) => {
    const expandedLine = line.split('').reduce((newLine, char, j) => {
      newLine += char;
      if (!columnsWithHashes.has(j)) {
        newLine += '.';
      }
      return newLine;
    }, '');

    expandedInput.push(expandedLine);
    if (emptyRowIndexes.has(i)) {
      expandedInput.push(expandedLine);
    }

    return expandedInput;
  }, []);
};

const locateHashes = (input) => {
  return input.reduce((locations, line, x) => {
    const hashMatches = Array.from(line.matchAll(/#/g));
    return [...locations, ...hashMatches.map(match => ({ x, y: match.index }))];
  }, []);
};

const calculateDistances = (locations) => {
  const distances = [];
  for (let i = 0; i < locations.length - 1; i++) {
    for (let j = i + 1; j < locations.length; j++) {
      distances.push(Math.abs(locations[i].x - locations[j].x) + Math.abs(locations[i].y - locations[j].y));
    }
  }
  return distances;
};

const part1 = (input) => {
  const expandedInput = expandInput(input);
  const hashLocations = locateHashes(expandedInput);
  const distances = calculateDistances(hashLocations);
  return distances.reduce((sum, num) => sum + num, 0);
};

const part2 = (input) => {

};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
