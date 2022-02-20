// console.log("hi")
// $(document).ready(function() {

//   var $deck = $('.card-deck');

//   $(window).resize(function() {
//     if (window.innerWidth >= 800) $deck.addClass('d-flex align-items-stretch');
//     else $deck.removeClass('d-flex align-items-stretch');
//   });

// })

var deck = document.querySelector('.card-deck');

window.onResize = function() {
  if (window.innerWidth >= 800) homeIcon.classList.add('d-flex');
  else homeIcon.classList.remove('d-flex');
};

// d-flex align-items-stretch