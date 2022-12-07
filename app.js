"use strict"

// DOM
const navBlocks = document.querySelectorAll('.menu__block');
const contentBlocks = document.querySelectorAll('.content__block');

let currentBlock = 0;

navBlocks.forEach((nav) => {
  nav.addEventListener('click', () => {
    
    navBlocks.forEach((nav) => {
      nav.classList.remove('active')
    })  

    nav.classList.add('active');

    contentBlocks.forEach((block) => {
      block.classList.remove('active');
      if (nav.classList.contains('menu__block-one') && block.classList.contains('content__block-one')) {
        block.classList.add('active');
      }
      if (nav.classList.contains('menu__block-two') && block.classList.contains('content__block-two')) {
        block.classList.add('active');
      }
      if (nav.classList.contains('menu__block-three') && block.classList.contains('content__block-three')) {
        block.classList.add('active');
      }
    })
  })

})