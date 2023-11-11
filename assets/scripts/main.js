const leftBox = document.getElementById('left-box');
const rightBox = document.getElementById('right-box');

const leftInput = document.getElementById('left-input');
const rightInput = document.getElementById('right-input');

const leftR = document.getElementById('left-r');
const leftG = document.getElementById('left-g');
const leftB = document.getElementById('left-b');

const rightR = document.getElementById('right-r');
const rightG = document.getElementById('right-g');
const rightB = document.getElementById('right-b');

function leftInputAction() {
  let leftValue = leftInput.value;
  if (leftValue.startsWith('#')) {
    leftValue = leftValue.substring(1);
    leftInput.value = leftValue;
  };
  leftBox.style.backgroundColor = '#' + leftValue;
  let parseValue = parseInt(leftValue, 16);
  let r = (parseValue >> 16) & 255;
  let g = (parseValue >> 8) & 255;
  let b = parseValue & 255;
  leftR.innerHTML = r;
  leftG.innerHTML = g;
  leftB.innerHTML = b;
};

function rightInputAction() {
  let rightValue = rightInput.value;
  if (rightValue.startsWith('#')) {
    rightValue = rightValue.substring(1);
    rightInput.value = rightValue;
  };
  rightBox.style.backgroundColor = '#' + rightValue;
  let parseValue = parseInt(rightValue, 16);
  let r = (parseValue >> 16) & 255;
  let g = (parseValue >> 8) & 255;
  let b = parseValue & 255;
  rightR.innerHTML = r;
  rightG.innerHTML = g;
  rightB.innerHTML = b;
};