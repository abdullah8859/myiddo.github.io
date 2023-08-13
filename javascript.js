$(function () {
  $("#accordion").accordion();
});

$(document).ready(function () {
  $(".box .btn").click(function () {
    $(".menuBar").slideToggle("slow");
  });


  $(window).scroll(function () {
    
    if ($(this).scrollTop() >= 560) {
      $(".back").fadeIn("slow");
    }
    else {
      $(".back").fadeOut("slow");
    }
  })

  $(".back").click(function(){
   
     $("body,html").animate({
      "scrollTop":"0"
    },"slow"); 
    
  })

  $("nav a").click(function(e){
    e.preventDefault();
    var x = $(this).attr("href");
    $("body,html").animate({
      "scrollTop":$(x).offset().top-80
    },"slow")
  })

  $(".sign a").click(function(e){
    e.preventDefault();
    var x = $(this).attr("href");
    $("body,html").animate({
      "scrollTop":$(x).offset().top-80
    },"slow")
    console.log(x);
  })
})

document.querySelector(".btn").addEventListener('click',function(){
  this.classList.toggle("active");
})

$(document).ready(function(){
  $(".btn").click(function(){
      $(".last").fadeToggle("slow");
  })
})

