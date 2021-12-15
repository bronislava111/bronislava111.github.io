// Get the modal
 var modal = document.getElementById("myModal");
    
 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 };


 
function replaceone(Type) {
    document.getElementById("div3").style.display = (Type) ? "block" : 'none';
    document.getElementById("div4").style.display = (Type) ? "none" : "block";
};

 
function replace(Type) {
    document.getElementById("div5").style.display = (Type) ? "block" : 'none';
    document.getElementById("div6").style.display = (Type) ? "none" : "block";
};

 
function replacetwo(Type) {
    document.getElementById("div7").style.display = (Type) ? "block" : 'none';
    document.getElementById("div8").style.display = (Type) ? "none" : "block";
};


 
function replacethree(Type) {
    document.getElementById("div9").style.display = (Type) ? "block" : 'none';
    document.getElementById("div10").style.display = (Type) ? "none" : "block";
};




 
function replace_retronslator(Type) {
    document.getElementById("div11").style.display = (Type) ? "block" : 'none';
    document.getElementById("div12").style.display = (Type) ? "none" : "block";
};


 
function replace_retronslator_two(Type) {
    document.getElementById("div13").style.display = (Type) ? "block" : 'none';
    document.getElementById("div14").style.display = (Type) ? "none" : "block";
};



 