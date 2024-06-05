var numberOfDrumButton = document.querySelectorAll(".drum").length;

var key = "";

// Detecting keyboard press
document.addEventListener("keydown", function (event) {
  getKey(event.key);

  buttonAnimation(event.key);
});

// Detecting button press
for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    getKey(this.innerHTML);

    buttonAnimation(this.innerHTML);
  });
}

function getKey(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();

      // Code to execute if expression matches value1
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();

      // Code to execute if expression matches value2
      break;
    // More cases as needed
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();

      // Code to execute if expression matches value2
      break;
    // More cases as needed
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();

      // Code to execute if expression matches value2
      break;
    // More cases as needed
    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();

      // Code to execute if expression matches value2
      break;
    // More cases as needed
    case "k":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();

      // Code to execute if expression matches value2
      break;
    // More cases as needed
    case "l":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();

      // Code to execute if expression matches value2
      break;
    // More cases as needed
    default:
    // Code to execute if expression doesn't match any case
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
