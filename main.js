'use strict';

function Tabs() {
  let bindAll = function() {
    let menuElements = document.querySelectorAll('[data-tab]');
    for(let i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  let clear = function() {
    let menuElements = document.querySelectorAll('[data-tab]');
    for(let i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      let id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  let change = function(e) {
    clear();
    e.target.classList.add('active');
    let id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

let connectTabs = new Tabs();


const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
console.log(sliderImageList);

sliderImageList[0].onclick = function(){
    sliderMainImage.src = sliderImageList[0].src;
    console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function(){
    sliderMainImage.src = sliderImageList[1].src;
    console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function(){
    sliderMainImage.src = sliderImageList[2].src;
    console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function(){
    sliderMainImage.src = sliderImageList[3].src;
    console.log(sliderMainImage.src);
};
sliderImageList[4].onclick = function(){
  sliderMainImage.src = sliderImageList[4].src;
  console.log(sliderMainImage.src);
};
sliderImageList[5].onclick = function(){
  sliderMainImage.src = sliderImageList[5].src;
  console.log(sliderMainImage.src);
};
// ===========================================================





// <!-- burger menu content script -->
 function openNav7() {
   document.getElementById("mySidenav7").style.width = "100%";
   document.getElementById("overlay-nav").style.display = "block";
 }

 function closeNav7() {
   document.getElementById("mySidenav7").style.width = "0";
   document.getElementById("overlay-nav").style.display = "none";
 }

 function openNav1() {
   document.getElementById("mySidenav1").style.width = "100%";
   document.getElementById("overlay-nav").style.display = "block";
 }

 function closeNav1() {
   document.getElementById("mySidenav1").style.width = "0";
   document.getElementById("overlay-nav").style.display = "none";
 }

 function openNav2() {
   document.getElementById("mySidenav2").style.width = "100%";
   document.getElementById("overlay-nav").style.display = "block";
 }

 function closeNav2() {
   document.getElementById("mySidenav2").style.width = "0";
   document.getElementById("overlay-nav").style.display = "none";
 }

 function openNav3() {
   document.getElementById("mySidenav3").style.width = "100%";
   document.getElementById("overlay-nav").style.display = "block";
 }

 function closeNav3() {
   document.getElementById("mySidenav3").style.width = "0";
   document.getElementById("overlay-nav").style.display = "none";
 }

 function openNav4() {
   document.getElementById("mySidenav4").style.width = "100%";
   document.getElementById("overlay-nav").style.display = "block";
 }

 function closeNav4() {
   document.getElementById("mySidenav4").style.width = "0";
   document.getElementById("overlay-nav").style.display = "none";
 }

