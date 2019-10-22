var modal = document.getElementById("modal");
var btn = document.getElementById("book");
var input = document.getElementsByClassName("input")[0];
var hidden1 = document.getElementsByClassName("hidden")[0];
var hidden2 = document.getElementsByClassName("hidden")[1];


// btn.onclick = function() {
  // modal.style.display = "block";
// }

btn.onclick = function() {
  hidden1.style.filter = "blur(9px)";
  hidden2.style.filter = "blur(9px)";
  modal.style.display = "block";
  btn.disabled = true;
  input.focus();
}
