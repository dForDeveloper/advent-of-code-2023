import readInput from '../read-input.js';

const charToDirectionsAndChars = {
  '|': { north: ['|', '7', 'F', 'S'], south: ['|', 'L', 'J', 'S'] },
  '-': { east: ['-', 'J', '7', 'S'], west: ['-', 'L', 'F', 'S'] },
  'L': { north: ['|', '7', 'F', 'S'], east: ['-', 'J', '7', 'S'] },
  'J': { north: ['|', '7', 'F', 'S'], west: ['-', 'L', 'F', 'S'] },
  '7': { south: ['|', 'L', 'J', 'S'], west: ['-', 'L', 'F', 'S'] },
  'F': { south: ['|', 'L', 'J', 'S'], east: ['-', 'J', '7', 'S'] },
  'S': { north: ['|', '7', 'F'], south: ['|', 'L', 'J'], east: ['-', 'J', '7'], west: ['-', 'L', 'F'] },
};

const findStartingNode = (input) => {
  for (let i = 0; i < input.length; i++) {
    const match = input[i].match('S');
    if (match) {
      return { x: i, y: match.index };
    }
  }
};

const findPositionInDirection = (input, coordinates, direction) => {
  const isAtNorthEdge = coordinates.x === 0;
  const isAtSouthEdge = coordinates.x === input.length - 1;
  const isAtEastEdge = coordinates.y === input[coordinates.x].length - 1;
  const isAtWestEdge = coordinates.y === 0;

  if (direction === 'north' && !isAtNorthEdge) {
    return { x: coordinates.x - 1, y: coordinates.y };
  } else if (direction === 'south' && !isAtSouthEdge) {
    return { x: coordinates.x + 1, y: coordinates.y};
  } else if (direction === 'east' && !isAtEastEdge) {
    return { x: coordinates.x, y: coordinates.y + 1};
  } else if (direction === 'west' && !isAtWestEdge) {
    return { x: coordinates.x, y: coordinates.y - 1};
  }
};

const findPositionOfAdjacentCharacter = (input, visitedNodes, coordinates) => {
  const currentCharacter = input[coordinates.x][coordinates.y];
  const directionsToCheck = charToDirectionsAndChars[currentCharacter];

  for (let direction in directionsToCheck) {
    const positionInDirection = findPositionInDirection(input, coordinates, direction);
    if (positionInDirection && !visitedNodes.has(`${positionInDirection.x},${positionInDirection.y}`)) {
      const characterInDirection = input[positionInDirection.x][positionInDirection.y];
      if (directionsToCheck[direction].includes(characterInDirection)) {
        return positionInDirection;
      }
    }
  }
  return findStartingNode(input);
};

const traverseLoop = (input, visitedNodes, startingNode) => {
  let nextPosition = findPositionOfAdjacentCharacter(input, visitedNodes, startingNode);
  while (input[nextPosition.x][nextPosition.y] !== 'S') {
    visitedNodes.set(`${nextPosition.x},${nextPosition.y}`, input[nextPosition.x][nextPosition.y]);
    nextPosition = findPositionOfAdjacentCharacter(input, visitedNodes, nextPosition);
  }
};

const part1 = (input) => {
  const startingNode = findStartingNode(input);
  const visitedNodes = new Map();
  visitedNodes.set(`${startingNode.x},${startingNode.y}`, 'S');
  traverseLoop(input, visitedNodes, startingNode);
  return visitedNodes.size / 2;
};

const part2 = (input) => {

};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
