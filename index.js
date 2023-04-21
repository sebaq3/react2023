const slider = document.querySelector ("#slider");
let SliderSection = document.querySelectorAll(".slider_section");
let  SliderSectionLast = SliderSection[SliderSection.length-1];

const btnleft = document.querySelector ("#btn_left");
const btnright = document.querySelector ("#btn_right");

slider.insertAdjacentElement("afterbegin", SliderSectionLast);

function Next (){
    let SliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout (function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", SliderSectionFirst);
        slider.style.marginleft = "-100%";

    }, 500)
 }


 function Prev (){
    let SliderSection = document.querySelectorAll(".slider_section");
    let  SliderSectionLast = SliderSection[SliderSection.length -1];    
    slider.style.marginleft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout (function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", SliderSectionLast);
        slider.style.marginleft = "-100%";

    }, 500);
 }

btnright.addEventListener ("click", function(){
    Next();
});

btnleft.addEventListener ("click", function(){
    Prev();
});


setInterval(function(){
  Next();
}, 5000);






var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_homeid").style.opacity = "1";
  } else {
    document.getElementById("nav_homeid").style.opacity = "0.85";
  }
  prevScrollpos = currentScrollPos;
}
