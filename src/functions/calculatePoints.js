export function calculatePoints(dices, index, pointsArray) {
  let points = 0;
  let sortedDices = [];

  for (let i = 0; i < dices.length; i++) {
    sortedDices[i] = dices[i].value;
  }
  sortedDices = sortedDices.sort(); //ascending

  switch (pointsArray[index].name) {
    case "Ones":
      for (let i = 0; i < 5; i++) {
        if (dices[i].value === 1) {
          points += dices[i].value;
        }
      }
      return points;

    case "Twos":
      for (let i = 0; i < 5; i++) {
        if (dices[i].value === 2) {
          points += dices[i].value;
        }
      }
      return points;

    case "Threes":
      for (let i = 0; i < 5; i++) {
        if (dices[i].value === 3) {
          points += dices[i].value;
        }
      }
      return points;

    case "Fours":
      for (let i = 0; i < 5; i++) {
        if (dices[i].value === 4) {
          points += dices[i].value;
        }
      }
      return points;

    case "Fives":
      for (let i = 0; i < 5; i++) {
        if (dices[i].value === 5) {
          points += dices[i].value;
        }
      }
      return points;

    case "Sixes":
      for (let i = 0; i < 5; i++) {
        if (dices[i].value === 6) {
          points += dices[i].value;
        }
      }
      return points;

    case "Middle sum":
      for (let i = 0; i < 6; i++) {
        if (pointsArray[i].locked) {
          points += pointsArray[i].value;
        }
      }
      return points;

    case "Bonus":
      for (let i = 0; i < 6; i++) {
        if (pointsArray[i].locked) {
          points += pointsArray[i].value;
        }
      }
      if (points >= 63) {
        points = 50;
      } else {
        points = 0;
      }
      return points;

    case "One pair":
      for (let i = 0; i < dices.length; i++) {
        if (sortedDices[i] === sortedDices[i + 1]) {
          points = sortedDices[i] * 2;
        }
      }

      return points;
    case "Two pairs":
      let pairsFound = 0;
      for (let i = 0; i < dices.length; i++) {
        if (sortedDices[i] === sortedDices[i + 1]) {
          points += sortedDices[i] * 2;
          pairsFound++;
          while (sortedDices[i] === sortedDices[i + 1]) {
            i++;
          }
        }
      }
      if (pairsFound < 2) {
        points = 0;
      }
      return points;

    case "Three of the same":
      for (let i = 0; i < dices.length - 2; i++) {
        if (
          sortedDices[i] === sortedDices[i + 1] &&
          sortedDices[i] === sortedDices[i + 2]
        ) {
          points = sortedDices[i] * 3;
          return points;
        }
      }
      return 0;

    case "Four of the same":
      for (let i = 0; i < dices.length - 3; i++) {
        if (
          sortedDices[i] === sortedDices[i + 1] &&
          sortedDices[i] === sortedDices[i + 2] &&
          sortedDices[i] === sortedDices[i + 3]
        ) {
          points = sortedDices[i] * 4;
        }
      }
      return points;

    case "Small straight":
      for (let i = 0; i < dices.length; i++) {
        if (sortedDices[i] === i + 1) {
          points += 3;
        } else {
          points = 0;
          i += 5;
        }
      }
      return points;

    case "Big straight":
      for (let i = 0; i < dices.length; i++) {
        if (sortedDices[i] === i + 2) {
          points += 4;
        } else {
          points = 0;
          i += 5;
        }
      }
      return points;

    case "Full house":
      if (
        sortedDices[0] === sortedDices[4] ||
        sortedDices[0] === sortedDices[3]
      ) {
        points = 0;
      } else if (
        (sortedDices[0] === sortedDices[1] &&
          sortedDices[0] === sortedDices[2] &&
          sortedDices[3] === sortedDices[4]) ||
        (sortedDices[0] === sortedDices[1] &&
          sortedDices[2] === sortedDices[3] &&
          sortedDices[2] === sortedDices[4])
      ) {
        points += sortedDices.reduce(function (a, b) {
          return a + b;
        }, 0);
      } else {
        points = 0;
      }
      return points;

    case "Random":
      for (let i = 0; i < dices.length; i++) {
        points += sortedDices[i];
      }
      return points;

    case "Yatzy":
      for (let i = 1; i < dices.length; i++) {
        if (sortedDices[0] === sortedDices[i]) {
          points += 12.5;
        } else {
          points = 0;
          i += 5;
        }
      }
      return points;

    case "Total":
      for (let i = 0; i < pointsArray.length; i++) {
        if (pointsArray[i].locked || i === 7) {
          points += pointsArray[i].value;
        }
      }
      return points;
    default:
      return;
  }
}
