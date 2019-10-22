var modal = document.getElementById("modal");
var closeBtn = document.getElementsByClassName("x")[0];
var hidden1 = document.getElementsByClassName("hidden")[0];
var hidden2 = document.getElementsByClassName("hidden")[1];

closeBtn.onclick = function() {
  modal.style.display = "none";
  hidden1.style.filter = "blur(0)";
  hidden2.style.filter = "blur(0)";
}
