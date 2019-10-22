var upArrow = document.getElementsByClassName("arrow")[0];
var downArrow = document.getElementsByClassName("arrow")[1];

var h = 19;
var m = 0;
var char_h = String(h);
var char_m = "00"
var time = char_h + " : " + char_m;

document.getElementById("timearea").innerText = time;

upArrow.onclick = function() {
  if(h == 24 & m == 0)
  {
    //24:00이면 위로 클릭 안됨
  }
  else
  {
    if(m == 0)
    {
      m = m+30;
      char_m = "30";
    }
    else if(m == 30)
    {
      h = h+1;
      m = 0;
      char_m = "00";
    }
    char_h = String(h);
    time = char_h + " : " + char_m;
    document.getElementById("timearea").innerText = time;
  }
}
downArrow.onclick = function() {
  if(h == 19 && m == 0)
  {
    //19:00이면 아래로 클릭 안됨
  }
  else
  {
    if(m == 0)
    {
      m = m+30;
      char_m = "30";
      h = h-1;
    }
    else if(m == 30)
    {
      m = 0;
      char_m = "00";
    }
    char_h = String(h);
    time = char_h + " : " + char_m;
    document.getElementById("timearea").innerText = time;
  }
}
