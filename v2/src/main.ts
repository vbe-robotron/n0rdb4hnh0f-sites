function alertloop() {
  for ( ; ; ) {
window.alert("　∧_∧　ババババ\n（ ・ω・)=つ≡つ\n（っ ≡つ=つ\n`/　　)\n(ノΠＵ\n何回閉じても無駄ですよ～ww\nm9（＾Д＾）プギャー！！\n逮捕できるもんならやってみろ、兵庫県警")
}
}

// main.ts の末尾などに追加
const btn = document.getElementById("alert-btn");
if (btn) {
  btn.addEventListener("click", alertloop);
}