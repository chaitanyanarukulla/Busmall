'use strict';
var nameArray = [];
var pathArray = [];
var newImages = [];
var oldImages = [];
function imgMaker(name, path) {
  this.name = name;
  this.path = path;
  this.timesAppeared = 0;
  this.timesclicked = 0;
  pathArray.push(this.path);
  nameArray.push(this.name);
}
new imgMaker('bag', 'img/bag.jpg');
new imgMaker('banana', 'img/banana.jpg');
new imgMaker('bathroom', 'img/bathroom.jpg');
new imgMaker('boots', 'img/boots.jpg');
new imgMaker('breakfast', 'img/breakfast.jpg');
new imgMaker('bubblegum', 'img/bubblegum.jpg');
new imgMaker('chair', 'img/chair.jpg');
new imgMaker('cthulhu', 'img/cthulhu.jpg');
new imgMaker('dog', 'img/dog-duck.jpg');
new imgMaker('dragon', 'img/dragon.jpg');
new imgMaker('pen', 'img/pen.jpg');
new imgMaker('pet', 'img/pet-sweep.jpg');
new imgMaker('scissors', 'img/scissors.jpg');
new imgMaker('shark', 'img/shark.jpg');
new imgMaker('sweep', 'img/sweep.png');
new imgMaker('tauntaum', 'img/tauntaun.jpg');
new imgMaker('unicorn', 'img/unicorn.jpg');
new imgMaker('usb', 'img/usb.jpg');
new imgMaker('water', 'img/water-can.jpg');
new imgMaker('wine', 'img/wine-glass.jpg');

function randomRoll() {
  Math.floor((Math.random() * nameArray.length) );

}

var newImages = function() {
  while(newImages.length < 3){
    for (var i = 0;i < newImages.length; i++) {
    }
  }
};
