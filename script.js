// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catEmoji = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

noBtn.addEventListener("mouseover", () => {
  const min = 80;
  const max = 200;

  const distance = Math.random() * (max - min) + min;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.position = "absolute";
  noBtn.style.transition = "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)"; // Lebih smooth
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

yesBtn.addEventListener("click", () => {
  title.innerHTML = "AWWW LOPELOPELOPE";
  catEmoji.innerHTML = '<img src="pocoyo.png" alt="Pocoyo Happy">';

  catEmoji.style.fontSize = "0";

  title.style.background = "none";
  title.style.webkitTextFillColor = "#d4af37";

  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";

  createGoldDust();
});

function createGoldDust() {
  const symbols = ["✨", "⭐", "💫", "🌑"];

  const interval = setInterval(() => {
    const dust = document.createElement("div");
    dust.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    dust.style.position = "fixed";
    dust.style.left = Math.random() * 100 + "vw";
    dust.style.top = "-5vh";
    dust.style.fontSize = Math.random() * 20 + 10 + "px";
    dust.style.color = Math.random() > 0.5 ? "#d4af37" : "#fff"; 
    dust.style.textShadow = "0 0 5px rgba(255,255,255,0.5)";
    dust.style.transition = "top 4s linear, opacity 4s ease-in";
    dust.style.zIndex = "1000";
    dust.style.pointerEvents = "none";

    document.body.appendChild(dust);

    setTimeout(() => {
      dust.style.top = "105vh";
      dust.style.opacity = "0";
    }, 50);

    setTimeout(() => {
      dust.remove();
    }, 4000);
  }, 150);

  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}
