// var tableNum = document.getElementsByClassName('sit');
// tableNum[i].onclick = function() {
//   for (var i = 0; i < tableNum; i++) {
//       this.style.backgroundColor = "#333";
//   }
// }
// var tableNum = document.querySelectorAll('.sit');
//
// for (var i=0; i < tableNum.length; i++) {
//   var item = tableNum.item(i);
//   item.onclick = function() {
//     item.toggle("select_pick",true);
//   }
// }
$(document).ready(function(){
  $(".sit").click(function(){
    $(this).toggleClass("select_pick");
  });
});
