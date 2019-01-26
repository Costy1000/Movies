var bar = $('.progress-bar')
 var time = 10000;



   
 
  function showPane(){
	  var currentImg = $('.show')
      var nextImg = currentImg.next(); 
	
	  
      currentImg.animate({'opacity': '0'},2000).removeClass("show")
	   nextImg.animate({'opacity': '1'},2000).addClass("show")
	  
	  if(nextImg.length == 0){
		  $('#slider .panel').first().animate({'opacity': '1'},2000).addClass("show")
	  }
	   
  }
   
 
	
  


	
 function run(){
 
 bar.width(0);
 setTimeout(showPane, 10000)
 bar.animate({'width': "+=100%"}, time, run);
	 

 } 
run(); 
     

   
   



	
	  


 