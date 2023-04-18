const point1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
const point2 = ["D", "G"];
const point3 = ["B", "C", "M", "P"];
const point4 = ["F", "H", "V", "W", "Y"];
const point5 = ["K"];
const point8 = ["J", "X"];
const point10 = ["Q", "Z"];

const arrayPoints = [];

function newOb(alphabet, count) {
  return (scrambble = {
    alphabet: alphabet,
    count: count,
  });
}

function scrambleProcess(word) {
  //remove spaces and join letters
  word = "DIAPAUSED";
  word = word.toLocaleUpperCase();
  let splitWord = word.trim().split(" ").join("");
  console.log(splitWord);
  //create array of character with the word
  const stringArray2 = splitWord.split("");
  console.log(stringArray2);
  //sort alphabet
  stringArray2.sort();
  console.log(stringArray2);
  let count = 1;
  let arrayRepeat = [];
  stringArray2.forEach((element, index) => {
    console.log(stringArray2[index + 1]);
    if (stringArray2[index + 1] == element) {
      ++count;

      console.log(count);
    } else if (stringArray2[index + 1] != element) {
      arrayRepeat.push(newOb(element, count));
      count = 1;
    } else if (stringArray2[index + 1] == undefined) {
      console.log("und");
    }
  });
  console.log(arrayRepeat);
  let totalP = 0;
  console.log(point1);
  arrayRepeat.forEach((word) => {
    //     let point = scramblePoints
    //       .filter((scramblePoint) => scramblePoint.alphabet == letter)
    //       .map((scramble) => scramble.point)
    //       .reduce((acc, points) => acc + points, 0);

    //     totalPoints += point;

    console.log(word.alphabet);
    if (point1.includes(word.alphabet)) {
      totalP = totalP + word.count * 1;
      console.log(word);
    } else if (point2.includes(word.alphabet)) {
      totalP = totalP + word.count * 2;
      console.log(word);
    } else if (point3.includes(word.alphabet)) {
      totalP = totalP + word.count * 3;
      console.log(word);
    } else if (point4.includes(word.alphabet)) {
      totalP = totalP + word.count * 4;
      console.log(word);
    } else if (point5.includes(word.alphabet)) {
      totalP = totalP + word.count * 5;
      console.log(word);
      console.log(word);
    } else if (point8.includes(word.alphabet)) {
      totalP = totalP + word.count * 8;
      console.log(word);
      console.log(word);
    } else if (point10.includes(word.alphabet)) {
      totalP = totalP + word.count * 10;
      console.log(word);
    }
    console.log(totalP);
  });
  console.log(totalP);
}

function score() {
  //let wordInput = document.getElementById("word").value.toLocaleUpperCase();
  //console.log(wordInput);
  let = wordInput = "ca bba g  e";
  console.log(wordInput);
  if (wordInput != "") {
    scrambleProcess(wordInput);
  } else {
    //temporal message
    alert("Cero Points");
  }
}

score();
function add() {}
