// $(document).ready(function () {
//   $('#form').submit(function (event) {
//     var serialize = $(this).serialize();
//     serialize = decodeURIComponent(serialize);
//     console.log(serialize);
//     event.preventDefault();
//   });
// });

$(document).ready(function () {
  $('#ok').click(function (event) {
    document.getElementsByClassName("name")[0].innerText = input.value +" " + "님";
  });
});
