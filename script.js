let sliderStarting = document.getElementById('starting');

sliderStarting.onpointerup = function () {
  startingP();
};

let startingOutput = document.getElementById('txt-starting');

let sliderWanted = document.getElementById('wanted');

sliderWanted.onpointerup = function () {
  endingP();
};

let wantedOutput = document.getElementById('txt-wanted');

let shuffleCode = document.getElementById('shuffle-code');

startingOutput.innerHTML = sliderStarting.value;

wantedOutput.innerHTML = sliderWanted.value;

let startingPos;

let endingPos;

let newEndingPos = false;

sliderStarting.oninput = function () {
  startingOutput.innerHTML = this.value;
};

sliderWanted.oninput = function () {
  wantedOutput.innerHTML = this.value;
  endingPos = parseInt(this.value - 1);
};

function binaryNumToIO(str) {
  let length = str.length;
  let io = [];
  for (let c = 0; c < length; c++) {
    if (str[c] == 0) {
      io.push('O');
    } else {
      io.push('I');
    }
  }
  console.log(`io: ${io.join('-')}`);
  return io.join('-');
}

// binaryNumToIO("001101")

function startingP() {
  startingPos = parseInt(startingOutput.innerHTML - 1);
  console.log(`Starting Pos: ${startingPos}`);
}

function endingP() {
  endingPos = parseInt(wantedOutput.innerHTML - 1);
  console.log(`Ending Pos: ${endingPos}`);
  binaryShuffleCode();
}

function binaryShuffleCode() {
  let numOfShuffles = [0];
  const keyNumbers = [1, 3, 7, 15, 31, 63];
  let startingPosDoubled = [];
  let endingPositions = [];
  let faroShuffles;
  if (numOfShuffles.length < 7) {
    for (let s of numOfShuffles) {
      startingPosDoubled.push((startingPos *= 2));
      //console.log(`Starting Pos: ${startingPosDoubled[s]}`);

      while (endingPos < startingPosDoubled[s]) {
        endingPos += 51;
        //console.log(`Ending Pos: ${endingPos}`);
      }
      if (endingPos >= startingPosDoubled[s]) {
        endingPositions.push(endingPos - startingPosDoubled[s]);
        //console.log(`Ending Positions: ${endingPositions[s]}`);
        if (endingPositions[s] > keyNumbers[s]) {
          numOfShuffles.push(numOfShuffles[s] + 1);
          //console.log(`Number of Shuffles: ${numOfShuffles}`);
        } else {
          console.log(`Num of Shuffles Length: ${numOfShuffles.length}`);
          faroShuffles = endingPositions[s].toString(2);
          //console.log(`Faro Shuffles: ${faroShuffles}`);
          //console.log(`Faro Shuffles Length: ${faroShuffles.length}`);
          if (
            faroShuffles.length != numOfShuffles.length &&
            !(numOfShuffles.length > 6)
          ) {
            faroShuffles = faroShuffles.padStart(numOfShuffles.length, '0');
            console.log(`Faro Shuffles: ${faroShuffles}`);
            shuffleCode.innerHTML = binaryNumToIO(faroShuffles);
          } else if (faroShuffles.length == numOfShuffles.length) {
            console.log(`Faro Shuffles: ${faroShuffles}`);
            shuffleCode.innerHTML = binaryNumToIO(faroShuffles);
          }
        }
      }
    }
  }
}
