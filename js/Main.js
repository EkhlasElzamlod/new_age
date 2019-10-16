$(document).ready(function(){
    /*navbar*/
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
          if (scroll > 50) {
            $("#navbar").addClass("background-navbar");
           
          }

          else{
              $("#navbar").removeClass("background-navbar");
             
          }
      });
});