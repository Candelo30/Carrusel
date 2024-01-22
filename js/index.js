const 
  BtnRight = document.querySelector("#right_slider"),
  Btnleft = document.querySelector("#left_slider"),
  slider = document.querySelector(".container-img"),
  ImgSlider = document.querySelectorAll(".img");

BtnRight.addEventListener('click', e=> moveRight());    
Btnleft.addEventListener('click', e=> moveLeft());    

var operacion = 0,
counter = 0,
widthImg = 100 / ImgSlider.length;

function moveRight () {
  if (counter >= ImgSlider.length-1) {
      operacion = 0;
      counter = 0;
      slider.style.transform = `translate(-${operacion}%)`;;
      slider.style.transition = "all ease .6s";
  }else {         
    counter ++; 
    operacion += widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s";
  }
};

function moveLeft () {
  counter--;
  if (counter < 0) {
    counter = ImgSlider.length-1;
    operacion = widthImg * (ImgSlider.length-1)
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s"; 
} else {
    operacion -= widthImg;  
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s";
}
};