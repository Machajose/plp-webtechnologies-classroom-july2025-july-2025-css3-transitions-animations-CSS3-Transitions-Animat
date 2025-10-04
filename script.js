// 🔹 Function with parameter + return
function checkNumber(num) {
  if (num > 100) {
    return "Too big!";
  } else {
    return "Okay!";
  }
}

// 🔹 Button click to use the function
document.getElementById("checkBtn").onclick = function () {
  let num = document.getElementById("numInput").value;
  let result = checkNumber(num); // call function
  document.getElementById("output").textContent = result;
};

// 🔹 Simple scope example
let globalMsg = "I am global!"; // global variable

function showMessage() {
  let localMsg = "I am local!"; // local variable
  console.log(globalMsg); // works
  console.log(localMsg);  // works only inside this function
}

showMessage(); // call it once

// 🔹 Trigger CSS animation with JS
document.getElementById("spinBtn").onclick = function () {
  let box = document.querySelector(".spin-box");
  box.classList.add("spin");

  // remove class after animation ends
  setTimeout(function () {
    box.classList.remove("spin");
  }, 1000);
};

