function toggleMobileMenu(){
    Array.from(document.getElementsByClassName("mobile-menu")).forEach(element => {
        element.classList.toggle("hidden");
    });
}

function showSubmitForm(){
  document.getElementById("submit-form").classList.toggle("hidden");
}

function clipSubmittedModal(value){
  document.getElementById("clip-submitted").classList.toggle("hidden");
  if(value == 1)
    setTimeout(function(){clipSubmittedModal(0)}, 4000);
}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("carousel-nav");
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
  setTimeout(function(){currentSlide(slideIndex + 1)}, 8000);
}