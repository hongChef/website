var okBtn = document.getElementsByClassName("ok")[0];
var modal = document.getElementById("modal");
var params = $("#form").serialize();

okBtn.onclick = function() {
  var input = document.getElementsByClassName("input")[0];
  input.setAttribute('data-value', input.value);
  modal.style.display = "none";
  console.log(input.outerHTML);
  console.log(params);
}
