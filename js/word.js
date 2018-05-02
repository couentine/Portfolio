var text = ["I build <br> Web Applications.", " I build <br> Landing Pages.", "I build <br> Corporate Websites.", "I build <br> Websites."];
var counter = 0;
var elem = document.getElementById("role");
var inst = setInterval(change, 1400);

function change() {
elem.innerHTML = text[counter];
counter++;
if (counter >= text.length) {
  counter = 0;
}
}
