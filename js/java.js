


window.onload =micerlar();
function micerlar(){

  var li_elements = document.querySelectorAll(".container2-form ul li a");
  var item_elements = document.querySelectorAll(".item");
  for (var i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function() {
      li_elements.forEach(function(li) {
        li.classList.remove("active");
      })
      this.classList.add("active");
      var li_value = this.getAttribute("data-li");
      item_elements.forEach(function(item) {
        item.style.display = "none";
      });
      
      if (li_value == "form-item1") {
        document.querySelector("." + li_value).style.display = "block";
      } else if (li_value == "form-item2") {
        document.querySelector("." + li_value).style.display = "block";
      } else {
        document.querySelector("." + li_value).style.display = "block";
      }
    });
  }
};
totop=document.querySelector(".backtop");

window.onscroll=function(){
   if(window.pageYOffset>100)
   {
   
    totop.classList.add("relize");
   }
   else{
    totop.classList.remove("relize");
   }
   totop.addEventListener("click",()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
   });
  

 };
 

    