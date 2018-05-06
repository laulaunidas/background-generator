const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const btRandom = document.getElementById("random");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`;
  css.textContent = `${body.style.background};`;
}

function getRandomInt() {
  let hex = (Math.floor(Math.random() * Math.floor(255))).toString(16);
  if( (hex.length % 2) > 0 ){ 
      hex = "0" + hex; 
    }
  return hex;

}

function randomGradient() {
  const r1 = getRandomInt();
  const g1 = getRandomInt();
  const b1 = getRandomInt();


  const r2 = getRandomInt();
  const g2 = getRandomInt();
  const b2 = getRandomInt();
  color1.value = `#${r1}${g1}${b1}`;
  color2.value = `#${r2}${g2}${b2}`;
  setGradient();
}

window.addEventListener("DOMContentLoaded", function() {
  color1.addEventListener("input", setGradient);
  color2.addEventListener("input", setGradient);
  btRandom.addEventListener("click", randomGradient);

  setGradient();
});
