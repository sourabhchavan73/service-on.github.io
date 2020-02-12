$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    
})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 200) {
    document.getElementById("nav-search").classList.add("show");
    document.getElementById("nav-search").classList.remove("hide");

} else {
    document.getElementById("nav-search").classList.add("hide");
    document.getElementById("nav-search").classList.remove("show");

}
}

function myModelFunction() {
  var dots1 = document.getElementById("dots-1");
  var moreModelText = document.getElementById("more-model");
  var moreModelbtn = document.getElementById("more-model-Btn");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    moreModelbtn.innerHTML = "See more"; 
    moreModelText.style.display = "none";
  } else {
    dots1.style.display = "none";
    moreModelbtn.innerHTML = "See less"; 
    moreModelText.style.display = "inline";
  }
}

function myServiceFunction(){
    var dots2 = document.getElementById("dots-2");
    var moreServiceText = document.getElementById("service-model");
    var moreserviceCatebtn = document.getElementById("service-model-Btn");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    moreserviceCatebtn.innerHTML = "See more"; 
    moreServiceText.style.display = "none";
  } else {
    dots2.style.display = "none";
    moreserviceCatebtn.innerHTML = "See less"; 
    moreServiceText.style.display = "inline";
  }

}