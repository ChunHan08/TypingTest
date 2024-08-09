const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
timeTag = document.querySelector(".time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span"),
tryAgainBtn = document.querySelector("button");

let timer,
maxTime = 10,
timeLeft = maxTime,
charIndex = mistake = isTyping = 0;

function randomParagraph() {
  let randIndex = Math.floor(Math.random() * paragraphs.length);

  paragraphs[randIndex].split("").forEach(span => {
    let spanTag = `<span>${span}</span>`;
    typingText.innerHTML += spanTag;
  });
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}
function initTyping() {
  const characters = typingText.querySelectorAll("span");
  let typedChar = inpField.nodeValue.split("")[charIndex];
  timer= setInterval(initTimer, 1000);
  if (typedChar == null) {
    charIndex--;
    if(characters[charIndex].classList.contains("incorrect")) {
      mistakes--;
    }
    if(characters[charIndex].classList.remove("correct", "incorrect"));
    
  } else {
    if(characters[charIndex].innerText == typedChar) {
      characters[charIndex].classList.add("correct");
    } else{
    mistakes++;
    characters[charIndex].classList.add("incorrect");
  }
  charIndex++;
}
characters.forEach(span => span.classList.remove("active"));
  characters[charIndex].classList.add("active");

let wpm = Math.round(((charIndex - mistake) / 5) / (maxTime - timeLeft) * 60);
wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
mistakeTag.innerText = mistakes;
wpmTag.innerText = wpm;
cpmTag.innerText = charIndex - mistakes;
} else {
  inpField.value = "";
  clearInterval(timer);
}

function initTimer() {
  if(timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
  } else {
    clearInterval(timer);
  }
}

function resetGame(){
  randomParagraph();
}
randomParagraph();
inpField.addEventListener("input", initTyping);