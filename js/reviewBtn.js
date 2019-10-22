var today = document.getElementsByClassName("today")[0];
var todayChildren = window.document.getElementsByClassName('todayChildren')[0];
var review = document.getElementsByClassName("review")[0];
var reviewChildren = window.document.getElementsByClassName('reviewChildren')[0];
var container = document.getElementsByClassName('container')[0]
var todayP = today.childNodes[0];
var reviewP = review.childNodes[0];
var book = document.getElementById("book");
var more = document.getElementById("more");


review.onclick = function() {
  todayP.style.borderBottom = "0px";
  reviewP.style.borderBottom = "3px solid #9796f0";
  todayChildren.style.display = "none";
  book.style.display = "none";
  reviewChildren.style.display = "block";
  more.style.display = "block";
}
