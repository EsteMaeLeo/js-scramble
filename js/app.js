//Test word"DIAPAUSED";
const point1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
const point2 = ["D", "G"];
const point3 = ["B", "C", "M", "P"];
const point4 = ["F", "H", "V", "W", "Y"];
const point5 = ["K"];
const point8 = ["J", "X"];
const point10 = ["Q", "Z"];

//create object with the letter and counter times appears in the string
function newOb(alphabet, count) {
  return (scrambble = {
    alphabet: alphabet,
    count: count,
  });
}
//create array with letters of the word and count times repeted in the string
const arrayRepeated = (stringArray) => {
  let count = 1;
  let array = [];
  stringArray.forEach((element, index) => {
    if (stringArray[index + 1] == element) {
      ++count;
    } else if (stringArray[index + 1] != element) {
      array.push(newOb(element, count));
      count = 1;
    }
  });
  return array;
};

//calculate total score
let totalScore = (arrayRepeat) => {
  let total = 0;
  arrayRepeat.forEach((word) => {
    console.log(word.alphabet);
    if (point1.includes(word.alphabet)) {
      total = total + word.count * 1;
    } else if (point2.includes(word.alphabet)) {
      total = total + word.count * 2;
    } else if (point3.includes(word.alphabet)) {
      total = total + word.count * 3;
    } else if (point4.includes(word.alphabet)) {
      total = total + word.count * 4;
    } else if (point5.includes(word.alphabet)) {
      total = total + word.count * 5;
    } else if (point8.includes(word.alphabet)) {
      total = total + word.count * 8;
    } else if (point10.includes(word.alphabet)) {
      total = total + word.count * 10;
    }
  });
  return total;
};

function scrambleProcess(word) {
  //remove spaces and join letters and uppercase .
  let splitWord = word.trim().split(" ").join("").toLocaleUpperCase();
  console.log(splitWord);
  //create array of character with the word
  const stringArray = splitWord.split("");
  //sort alphabet
  stringArray.sort();
  let arrayRepeat = arrayRepeated(stringArray);

  console.log(arrayRepeat);
  let totalP = totalScore(arrayRepeat);
  console.log(totalP);
  document.getElementById("result").innerHTML = `Resultado: ${totalP}`;
}

function score() {
  let wordInput = document.getElementById("word").value.toLocaleUpperCase();
  if (wordInput != "") {
    scrambleProcess(wordInput);
  } else {
    document.getElementById("result").innerHTML = `Cero Points`;
  }
}
