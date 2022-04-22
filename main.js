
 var second=0
 var minute=0
 var hour=0

let timer = setTimeout(function tick() {
    second=$(".second").html()
    second-=1
 


    $(".second").html(second)
 if (second==0){
    $(".second").html(59)
    minute=$(".minute").html()
     minute-=1
     $(".minute").html(minute)
     if( minute==0){
         $(".minute").html(59)
         hour=$(".hour").html()
         hour-=1
         $(".hour").html(hour)
         if(hour==0&&minute==0&hour==0){
            $(".hour").html(12)  
            $(".minute").html(59)
            $(".second").html(59)
         }
     }
 }
    timer = setTimeout(tick, 1000); // (*)
  }, 2000);