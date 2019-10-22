// var speed = 700;
//
// function scrolling(obj) {
//   if(!obj) {
//     $('html,body').animate({scrollTop: 0}, speed);
//   } else {
//     var posTop = $(obj).offset().top-80;
//     $('html, body').animate({scrollTop: posTop}, speed);
//   }
// };
//
// $('#ok').click(function() {
//   var direction = $(this).attr("href");
//   scrolling(direction);
//   return false;
// }
var ok = document.getElementById("ok");
var modal = document.getElementById("modal");
var hidden1 = document.getElementsByClassName("hidden")[0];
var hidden2 = document.getElementsByClassName("hidden")[1];


ok.onclick = function() {
  modal.style.display = "none";
  hidden1.style.filter = "blur(0)";
  hidden2.style.filter = "blur(0)";
}
