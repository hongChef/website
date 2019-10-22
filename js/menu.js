var option = [
document.getElementsByClassName("roasting"),
document.getElementsByClassName("garnish"),
document.getElementsByClassName("drink"),
document.getElementsByClassName("sauce")
];

option[0] = ["레어", "미디움 레어", "미디움", "미디움 웰던", "웰던"];
option[1] = ["버섯","감자","양파","가지","토마토"];
option[2] = ["콜라","사이다","레드와인","주스"];
option[3] = ["우스터","그레이비","샤토브리앙","포트와인","데미글라스"];

var leftBtn = document.getElementsByClassName("left_btn");
var rightBtn = document.getElementsByClassName("right_btn");



for(let i=0; i<option.length; i++) {
  let j = 0;
  document.getElementsByClassName("p1")[i].innerText = option[i][0];
  //document.getElementsByClassName("p1")[0].innerText = roasting[j];
  leftBtn[i].onclick = function() {
    if(j == 0)
      j = option[i].length-1;
    else
      j = j-1;
    document.getElementsByClassName("p1")[i].innerText = option[i][j];
  }
}

for(let i=0; i<option.length; i++) {
  let j = 0;
  document.getElementsByClassName("p1")[i].innerText = option[i][0];
  rightBtn[i].onclick = function() {
    if(j == option[i].length-1)
      j = 0;
    else
      j = j+1;
    document.getElementsByClassName("p1")[i].innerText = option[i][j];
  }
}





//
//
// for (let i=0; i<roasting.length; i++) {
//   leftBtn.onclick = function() {
//
//     console.log(roasting[i], i);
//     document.getElementsByClassName("p1")[0].innerText = roasting[i];
//
//     roasting[i] = roasting[i-1];
//     console.log(i);
//   }
// }
//
//
//
// for (let i=0; i<roasting.length; i++) {
//   rightBtn.onclick = function() {
//     if (i=4) {
//       i++;
//       console.log(roasting[i]);
//       document.getElementsByClassName("p1")[0].innerText = roasting[i];
//     }
//     roasting[i] = roasting[i+1];
//     console.log(i);
//   }
// }
