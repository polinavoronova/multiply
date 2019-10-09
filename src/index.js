module.exports = function multiply(first, second) {
  const arrFirstNumber = first.split('');
  arrFirstNumber.reverse();
  const arrSecondNumber = second.split('');
  arrSecondNumber.reverse();
  let arrMultiply = [];

  for (let j = 0; j < arrSecondNumber.length; j++) {
    arrMultiply.push(Number(arrFirstNumber[0])*Number(arrSecondNumber[j]));
  }

  for (let i = 1; i < arrFirstNumber.length; i++) {
    let digitMultiplication;
    let newMultiplayElem;
    let elemPosition;

    for (let j = 0; j < arrSecondNumber.length; j++) {
      digitMultiplication = Number(arrFirstNumber[i])*Number(arrSecondNumber[j]);
      elemPosition = j+i; // shift one element to the right in arrMultiplty
      if (!arrMultiply[elemPosition]) {
        arrMultiply[elemPosition] = 0;
      }
      newMultiplayElem = arrMultiply[elemPosition] + digitMultiplication; // imitation the column addition
      arrMultiply[elemPosition] = newMultiplayElem;
      }

  }

  for (let k = 0; k < arrMultiply.length - 1; k++) {
    if (arrMultiply[k] >= 10) {
      let ceil = Math.floor(arrMultiply[k] / 10);
      let remainder = arrMultiply[k] % 10;
      arrMultiply[k] = remainder;
      arrMultiply[k+1] = arrMultiply[k+1] + ceil;
    }
  }
  return arrMultiply.reverse().join('');
}
