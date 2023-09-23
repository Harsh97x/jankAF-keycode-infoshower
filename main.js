import "./style.css";

// indicator innertext manipulation to show the keypressed
// keypressed ka e.key code kya hain wo e.key ke span tag mein show hona hain
// aisehi e.keycode and e.code ka karna hain

const keyshow = (e) => {
  const indi = document.querySelector(".indicator");
  indi.textContent = e.key;
  const ekey = document.querySelector(".ekey");
  ekey.innerText = e.key;
  const ekeycode = document.querySelector(".ekeycode");
  ekeycode.innerText = e.which;
  const ecode = document.querySelector(".ecode");
  ecode.innerText = e.code;
};

window.addEventListener("keypress", keyshow);
