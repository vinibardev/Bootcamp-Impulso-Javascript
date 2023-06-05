const placeNumber = document.getElementById("currentNumber");
let counter = 0;

function increment() {
  counter++;
  placeNumber.innerHTML = counter;

  if (counter == 0) {
    placeNumber.style.color = "black";
  } else if (counter < 0) {
    placeNumber.style.color = "red";
  } else {
    placeNumber.style.color = "blue";
  }
}

function decrement() {
  counter--;
  placeNumber.innerHTML = counter;

  if (counter == 0) {
    placeNumber.style.color = "black";
  } else if (counter < 0) {
    placeNumber.style.color = "red";
  } else {
    placeNumber.style.color = "blue";
  }
}

function zero() {
  counter = 0;
  placeNumber.innerHTML = counter;
  placeNumber.style.color = "black";
}
