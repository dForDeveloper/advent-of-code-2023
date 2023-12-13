import readInput from '../read-input.js';

const findEmptyRowsAndColumns = (input) => {
  const emptyRowIndexes = new Set();
  const emptyColumnIndexes = new Set();

  for (let i = 0; i < input[0].length; i++) {
    emptyColumnIndexes.add(i);
  }

  input.forEach((line, i) => {
    const matches = Array.from(line.matchAll(/#/g));
    if (!matches.length) {
      emptyRowIndexes.add(i);
    } else {
      matches.forEach(match => emptyColumnIndexes.delete(match.index));
    }
  });

  return [emptyRowIndexes, emptyColumnIndexes];
};

const locateHashes = (input) => {
  return input.reduce((locations, line, y) => {
    const hashMatches = Array.from(line.matchAll(/#/g));
    return [...locations, ...hashMatches.map(match => ({ y, x: match.index }))];
  }, []);
};

const calculateOneDimensionalDistanceWithExpandedEmptySpace = (a, b, emptySpaces, expansionFactor) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let expandedSpace = max - min;
  for (let i = min; i < max; i++) {
    if (emptySpaces.has(i)) {
      expandedSpace += expansionFactor;
    }
  }
  return expandedSpace;
};

const calculateDistances = (locations, emptyRows, emptyColumns, expansionFactor) => {
  const distances = [];
  for (let i = 0; i < locations.length - 1; i++) {
    for (let j = i + 1; j < locations.length; j++) {
      let horizontalDistance = calculateOneDimensionalDistanceWithExpandedEmptySpace(
        locations[i].x,
        locations[j].x,
        emptyColumns,
        expansionFactor
      );
      let verticalDistance = calculateOneDimensionalDistanceWithExpandedEmptySpace(
        locations[i].y,
        locations[j].y,
        emptyRows,
        expansionFactor
      );
      distances.push(horizontalDistance + verticalDistance);
    }
  }
  return distances;
};

const part1 = (input) => {
  const [emptyRowIndexes, emptyColumnIndexes] = findEmptyRowsAndColumns(input);
  const hashLocations = locateHashes(input);
  const distances = calculateDistances(hashLocations, emptyRowIndexes, emptyColumnIndexes, 1);
  return distances.reduce((sum, num) => sum + num, 0);
};

const part2 = (input) => {
  const [emptyRowIndexes, emptyColumnIndexes] = findEmptyRowsAndColumns(input);
  const hashLocations = locateHashes(input);
  const distances = calculateDistances(hashLocations, emptyRowIndexes, emptyColumnIndexes, 999999);
  return distances.reduce((sum, num) => sum + num, 0);
};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
