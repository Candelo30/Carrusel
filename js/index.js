let selectedElement = false;
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
      slider.style.transform = `translate(-${operacion}%)`;
      slider.style.transition = "all ease .6s";
      selectedElement = toggleElementStyle(indexImgElements[counter], selectedElement);
  }else {         
    counter ++; 
    operacion += widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    selectedElement = toggleElementStyle(indexImgElements[counter], selectedElement);

  }
};

function moveLeft () {
  counter--;
  if (counter < 0) {
    counter = ImgSlider.length-1;
    operacion = widthImg * (ImgSlider.length-1)
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"; 
    selectedElement = toggleElementStyle(indexImgElements[counter], selectedElement);
} else {
    operacion -= widthImg;  
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    selectedElement = toggleElementStyle(indexImgElements[counter], selectedElement);
}

};



// Seleccionar todos los elementos con clase "position"
const indexImgElements = document.querySelectorAll(".position");


// Añadir event listener a cada elemento
indexImgElements.forEach((element, index) => {
  element.addEventListener('click', () => {
    counter = 0;
    counter = index - 1;
    if (counter === 7) {
      moveRight(); 
      selectedElement = toggleElementStyle(element, selectedElement);
    }
    operacion = widthImg * (index);
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    selectedElement = toggleElementStyle(element, selectedElement);
    })
});

      
function toggleElementStyle(element, selectedElement) {
  // Restaurar la opacidad del elemento anteriormente seleccionado  
  if (selectedElement && selectedElement.style) {        
    selectedElement.style.opacity = '1';        
  }

  // Cambiar el estilo del elemento actual     
  if (selectedElement !== element) {  
    element.style.opacity = '0.7';
    return element;
  } else {         
    return null; // Desseleccionar el elemento si se hace clic nuevamente      
  }
}