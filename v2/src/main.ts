// src/main.ts
const konamiCode: string[] = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let konamiIndex = 0;

document.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      alert("Flag: CTF{welc0me_t0_n0rdb4hnh0f_w0rld}");
      // ここで背景色を変える、または隠し要素を表示するなどの処理
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});
