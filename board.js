let board = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
];

function knightMoves([x, y], [x2, y2]) {
  if (0 > x > 7 || 0 > y > 7 || 0 > x2 > 7 || 0 > y2 > 7) {
    return "out of bound";
  }
}

class Knight {
  constructor([x, y]) {
    this.x = x;
    this.y = y;
    this.nLeft = [x + 2, y + 1];
    this.nRight = [x + 2, y - 1];
    this.eLeft = [x - 2, y + 1];
    this.eRight = [x - 2, y - 1];
    this.sLeft = [x - 2, y - 1];
    this.sRight = [x - 2, y + 1];
    this.wLeft = [x + 2, y - 1];
    this.wRight = [x + 2, y + 1];
  }
}

let start = [0, 0];

const knight = new Knight(start);

console.log(knight.wRight);
