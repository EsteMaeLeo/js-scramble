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
  //remove spaces and join letters "DIAPAUSED";

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
    if (stringArray2[index + 1] == element) {
      ++count;
    } else if (stringArray2[index + 1] != element) {
      arrayRepeat.push(newOb(element, count));
      count = 1;
    }
  });

  console.log(arrayRepeat);
  let totalP = 0;
  console.log(point1);
  arrayRepeat.forEach((word) => {
    console.log(word.alphabet);
    if (point1.includes(word.alphabet)) {
      totalP = totalP + word.count * 1;
    } else if (point2.includes(word.alphabet)) {
      totalP = totalP + word.count * 2;
    } else if (point3.includes(word.alphabet)) {
      totalP = totalP + word.count * 3;
    } else if (point4.includes(word.alphabet)) {
      totalP = totalP + word.count * 4;
    } else if (point5.includes(word.alphabet)) {
      totalP = totalP + word.count * 5;
    } else if (point8.includes(word.alphabet)) {
      totalP = totalP + word.count * 8;
    } else if (point10.includes(word.alphabet)) {
      totalP = totalP + word.count * 10;
    }
  });
  console.log(totalP);
  document.getElementById("result").innerHTML = `Resultado: ${totalP}`;
}

function score() {
  let wordInput = document.getElementById("word").value.toLocaleUpperCase();
  if (wordInput != "") {
    scrambleProcess(wordInput);
  } else {
    //temporal message
    alert("Cero Points");
  }
}
