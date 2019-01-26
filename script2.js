

function showImage(){
 setInterval(function(){
	  var currentImg = $('.nothide');
	  var nextImg = currentImg.next();
	
	    var a =  currentImg.animate({'opacity': '0'},2000).removeClass("nothide")
	   var  b = nextImg.animate({'opacity': '1'},2000).addClass("nothide")
	   
	   
	  if(nextImg.length == 0){
		   var c = $('#header .image').first().animate({'opacity': '1'},2000).addClass("nothide")
	  } }, 15000)
		}
	
         showImage()
        
         