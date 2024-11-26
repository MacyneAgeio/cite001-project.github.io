let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("images");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function display() {
  var popup = document.getElementById("info1", "info2");
  popup.classList.toggle("show");
}

function info() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("see");
  var btnText = document.getElementById("btn");
  var spots = document.getElementById("spots");
  var moreTxt = document.getElementById("open");
  var btn2Txt = document.getElementById("btn2");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See more"; 
    moreText.style.display = "none";
  } 
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Close"; 
    moreText.style.display = "inline";
  }
  
  if (spots.style.display === "none") {
      spots.style.display = "inline";
      btn2Txt.innerHTML = "See more"; 
      moreTxt.style.display = "none";
    } 
    else {
      spots.style.display = "none";
      btn2Txt.innerHTML = "Close"; 
      moreTxt.style.display = "inline";
    }

}