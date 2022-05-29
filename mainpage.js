var toggle = document.getElementById("navMOB");
var cancel = document.getElementById("cancel");
var ikon = document.getElementById("icon");
var num = 0;

function pop(){
    if(num%2 === 0) {
      toggle.style.display = "block";
      ikon.style.display = "none";
      cancel.style.display = "inherit";
    }else{
      toggle.style.display = "none";
      ikon.style.display = "inherit";
      cancel.style.display = "none";
    }
    num++;
}


$(document).ready(function(){
  $("#galeri").click(function(){
    $(".photo_gallery").show();
  });
});

