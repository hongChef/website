var storeImg = document.getElementsByClassName("store");
var locationBtn = document.getElementsByClassName("location_btn");
var hiding = document.getElementsByClassName("hiding");//분홍색 박스
//var hiding = document.querySelectorAll(".hiding");//분홍색 박스
var hide = document.getElementsByClassName("hide")[0];//예약하기 버튼
var isBool = [true,true,true];

for (let i=0; i<storeImg.length; i++) {
  storeImg[i].onclick = function() {
    if(isBool[i])
    {
      if(isBool.includes(false))
      {
        isBool = [true,true,true];
        for(j = 0; j<storeImg.length;j++)
        {
          hiding[j].style.display = "none";
          locationBtn[j].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        }
        hide.style.display="none";
      }
      hiding[i].style.display = "block";
      hide.style.display="block";
      locationBtn[i].style.backgroundColor = "#9796f0"
    }
    else
    {
      hiding[i].style.display = "none";
      hide.style.display="none";
      locationBtn[i].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    }
      isBool[i] = !isBool[i]
    }
}


// function toggle0() {
//   isBool = !isBool;
//   console.log(isBool);
// }
//
// var count = -1;
// function toggle1(){
//   count = count * -1;
//   console.log(count);
// }
//
// var result = 0;
// function toggle2() {
//   result = !result ? 1 : 0;
//   console.log(result);
// }
//
// for(var i=0; i<=2; i++) {
//   (function(n) {
//     document.getElementsByClassName("store")[n].onclick = function() {
//       var fn = window["toggle"+n];
//       fn();
//     };
//   })(i);
// }
