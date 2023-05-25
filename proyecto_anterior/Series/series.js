


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
