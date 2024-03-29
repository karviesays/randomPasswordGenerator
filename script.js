const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const genPassBtn = document.querySelector("#genPassBtn");
const passLength = 15;
const showPass1 = document.querySelector("#textbox1");
const showPass2 = document.querySelector("#textbox2");
let globalPassOne = "";
let globalPassTwo = "";
function generatePass() {
  let randPass = "";
  for (let i = 0; i < passLength; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    randPass += characters[randomNum];
  }
  return randPass;
}
function showPass() {
  globalPassOne = generatePass();
  globalPassTwo = generatePass();
  showPass1.value = globalPassOne;
  showPass2.value = globalPassTwo;
}

genPassBtn.addEventListener("click", showPass);
