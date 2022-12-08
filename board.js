function getNode(location, destination) {
  if (
    location[0] < 0 ||
    location[1] < 0 ||
    location[0] > 7 ||
    location[1] > 7
  ) {
    return null;
  }

  return { location, destination };
}

function knightMoves([x, y], [x2, y2]) {
  let queue = [getNode([x, y], [[x, y]])];
  let currentPlace = queue.shift();
  while (currentPlace.location[0] != x2 || currentPlace.location[1] != y2) {
    let moveSet = [
      [currentPlace.location[0] + 2, currentPlace.location[1] - 1],
      [currentPlace.location[0] + 2, currentPlace.location[1] + 1],
      [currentPlace.location[0] - 2, currentPlace.location[1] - 1],
      [currentPlace.location[0] - 2, currentPlace.location[1] + 1],
      [currentPlace.location[0] + 1, currentPlace.location[1] - 2],
      [currentPlace.location[0] + 1, currentPlace.location[1] + 2],
      [currentPlace.location[0] - 1, currentPlace.location[1] - 2],
      [currentPlace.location[0] - 1, currentPlace.location[1] + 2],
    ];
    moveSet.forEach((move) => {
      let newNode = getNode(move, currentPlace.destination.concat([move]));
      if (newNode) {
        queue.push(newNode);
      }
    });
    currentPlace = queue.shift();
  }

  let message =
    "you made it in " +
    (currentPlace.destination.length - 1) +
    " moves! Here is the path";
  console.log(message);
  currentPlace.destination.forEach((location) => {
    console.log(location);
  });
}

knightMoves([3, 3], [4, 3]);
