$(document).ready(function () {

    $("#logo1").mouseenter(function(){
       $("#logo1").animate({
        height: "+=20px",
        width: "+=20px"
       });
    });
    $("#logo1").mouseout(function(){
       $("#logo1").animate({
          height:"-=20px",
          width:"-=20px"
       });
    });


 });
    
