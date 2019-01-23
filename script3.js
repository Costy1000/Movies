function filterFunction() {
   
    
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("Input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search-image");
    li = ul.getElementsByClassName("image-p");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
            ul.style.display = "block";
           
        } else {
            li[i].style.display = "none";
        } 
	}
         if ( input.value  == "" || input.value  == null){
             ul.style.display = "none";
        } 
    
}  