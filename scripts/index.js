const sbml = document.querySelector('.subscribe__mail');

sbml.addEventListener('submit', (e) => {
  e.preventDefault();
})

let timer = 0;

function fadeIn() {
  window.addEventListener('load', (event)=> {
    let intersectionObserve = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(function() {
            // entry.target.classList.add('slideUp');
            entry.target.classList.add('fadeIn');
          }, timer);
          timer += 60;
          intersectionObserve.unobserve(entry.target);
          setTimeout(function() {
            timer = 0;
          }, 1000)
        }
      });
    });
  
    document.querySelectorAll('.animation__fadeIn').forEach(obj => {
      intersectionObserve.observe(obj)
    });
  });
}

function slideUp() {
  window.addEventListener('load', (event)=> {
    let intersectionObserve = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(function() {
            // entry.target.classList.add('slideUp');
            entry.target.classList.add('slideUp');
          }, timer);
          timer += 50;
          intersectionObserve.unobserve(entry.target);
          setTimeout(function() {
            timer = 0;
          }, 1000)
        }
      });
    });
  
    document.querySelectorAll('.animation__slideUp').forEach(obj => {
      intersectionObserve.observe(obj)
    });
  });
}

function simpleSlideUp() {
  window.addEventListener('load', (event)=> {
    let intersectionObserve = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.classList.add('simpleSlideUp');
          }, timer);
          timer += 120;
          intersectionObserve.unobserve(entry.target);
          setTimeout(function() {
            timer = 0;
          }, 1000)
        }
      });
    });
  
    document.querySelectorAll('.animation__simpleSlideUp').forEach(obj => {
      intersectionObserve.observe(obj)
    });
  });
}

simpleSlideUp();
slideUp();
fadeIn();

/* 
#============================================#
#                 CAROUSEL                   #
#============================================#
*/
const carouselItems = document.getElementsByClassName('carousel__item');
let crr_index = 0;

function renderImages() {
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.display = 'none';
  }

  carouselItems[crr_index].style.display = 'Block';
}

function slideshow() {
  if (crr_index == carouselItems.length - 1) {
    crr_index = 0;
  } else{
    crr_index++;
  }
}

setInterval(()=> {
  slideshow()
  renderImages();
}, 3000)

renderImages();

// "use strict";

// // Add an attribute objects to an element
// var addAttributes = function addAttributes(element, attrObj) {
//   for (var attr in attrObj) {
//     if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
//   }
// }; // create lements with attributes and childrens


// var createCustomElement = function createCustomElement(element, attributes, children) {
//   var customElement = document.createElement(element);
//   if (children !== undefined) children.forEach(function (el) {
//     if (el.nodeType) {
//       if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
//     } else {
//       customElement.innerHTML += el;
//     }
//   });
//   addAttributes(customElement, attributes);
//   return customElement;
// }; // Modal


// var printModal = function printModal(content) {
//   // Creating inner container
//   var modalContentElement = createCustomElement('div', {
//     id: 'modal-content',
//     "class": 'modal-content'
//   }, [content]),
//       // Creating main container
//   modalContainerElement = createCustomElement('div', {
//     id: 'modal-container',
//     "class": 'modal-container'
//   }, [modalContentElement]); // Printing the modal

//   document.body.appendChild(modalContainerElement); // Quitting Modal

//   var closeModal = function closeModal() {
//     return document.body.removeChild(modalContainerElement);
//   };

//   modalContainerElement.addEventListener('click', function (e) {
//     if (e.target === modalContainerElement) closeModal();
//   });
// };

// document.getElementById('show-modal').addEventListener('click', function () {
//   printModal("<p class='modaAlert'>Lamentablemente la tienda y la aplicaci\xF3n educativa \"BoroBoro\" no se encuentran disponibles por el momento. <br><br> <i class='disable-text'>Toque cualquier parte de la pantalla para salir</i></p>");
// });