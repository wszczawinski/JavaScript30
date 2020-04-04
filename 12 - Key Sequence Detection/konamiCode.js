const pressed = [];
const secretCode = "banana";
const codeCracked = document.querySelector("#display");

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    codeCracked.innerHTML = '<img src="morpheus.png" alt="morpheus">';
  }
});
