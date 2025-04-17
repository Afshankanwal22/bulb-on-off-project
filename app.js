let onBtn = document.getElementById("onBtn");
let offBtn = document.getElementById("offBtn");
let bulbOn = document.getElementById("on-bulb");
let bulbOff = document.getElementById("off-bulb");
let status = document.getElementById("status");
let clickSound = document.getElementById("clickSound");
let bulbOverlay = document.getElementById("bulbOverlay");

onBtn.addEventListener("click", function() {
  

  clickSound.currentTime = 0;
  clickSound.play();

  bulbOn.style.display = "block";
  bulbOff.style.display = "none";
  bulbOn.classList.add("bulb-glow");
  bulbOverlay.classList.add("on-background");
  status.textContent = "Bulb is ON";
});

offBtn.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();

  bulbOn.style.display = "none";
  bulbOff.style.display = "block";
  bulbOn.classList.remove("bulb-glow");
  bulbOverlay.classList.remove("on-background");
  status.textContent = "Bulb is OFF";
});