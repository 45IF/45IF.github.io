let i = 0;
let txt = 'BENVENUTI NEL FUTURO DEI VIAGGI SPAZIALI'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    if (txt.charAt(i) === " " && i === 20){
      document.getElementById("titolo").innerHTML += '<br>';
    }
    document.getElementById("titolo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}