var allArray = [];
var newrender = [];
var oldrender = [];
var piconweb = document.getElementById('imgrool');
var totalClicks = 0;

// product constructer
function ImgMaker(name, path) {
  this.path = path;
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.percent = 0;
  // this.calcConversion = 0;
  allArray.push(this);
};
//function for random picture..
function randomPic() {
  newrender = [];
  while (newrender.length < 3) {
    var randomNum = Math.floor(Math.random() * allArray.length);
    if (!newrender.includes(allArray[randomNum]) && !oldrender.includes(allArray[randomNum])) {
      newrender.push(allArray[randomNum]);
    }
    oldrender = newrender;
  }

}
//calculate conversion rate
function calcConversion() {
  for (var i = 0; i < allArray.length; i++) {
    if (allArray[i].views === 0) {
      allArray[i].views = 0;
    } else {
      allArray[i].percent = allArray[i].clicks / allArray[i].views;
    }
  }
}
// Wipe the window imgs
function wipe() {
  while (imgrool.firstChild) {
    imgrool.removeChild(imgrool.firstChild);
  }
}
// putting img on screen
function render() {
  randomPic();
  for (var i = 0; i < newrender.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = newrender[i].path;
    imgEl.id = newrender[i].name;
    piconweb.appendChild(imgEl);
    newrender[i].views++;
  }
}
// Event handler
function handleClick(event) {
  for (var i = 0; i < newrender.length; i++) {
    if (event.target.id === newrender[i].name) {
      newrender[i].clicks++;
      totalClicks++;
      localStorage.setItem('chai', JSON.stringify(allArray));
    }
  }
  if (totalClicks === 25) {
    piconweb.removeEventListener('click', handleClick);
    wipe();
    calcConversion();
    coolChart();
    coolChart2();
  } else {
    wipe();
    randomPic();
    render();
  }
}
// making chart
function coolChart() {
  var chartLabel = [];
  var chartData = [];
  for (var i = 0; i < allArray.length; i++) {
    chartData.push(allArray[i].clicks);
    chartLabel.push(allArray[i].name);
  }
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabel,
      datasets: [{
        label: 'Buss Mall - Products Clicked ',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .9)',
          'rgba(255, 206, 88, .8)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, .9)',
          'rgba(255, 159, 64, .8)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .7)',
          'rgba(255, 206, 88.8)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255,.9)',
          'rgba(255, 159, 64,.8)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .8)',
          'rgba(255, 206, 88, .9)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, .9)',
          'rgba(255, 159, 64, .8)',
          'rgba(255, 99, 132,1)',
          'rgba(54, 162, 235.9)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function coolChart2() {
  var chartLabel = [];
  var chartCon = [];
  for (var i = 0; i < allArray.length; i++) {
    chartLabel.push(allArray[i].name);
    chartCon.push(allArray[i].percent);
  }

  var ctx = document.getElementById("myChart2").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: chartLabel,
      datasets: [{
        label: 'Buss Mall - Conversion -Rate',
        data: chartCon,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .9)',
          'rgba(255, 206, 88, .8)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, .9)',
          'rgba(255, 159, 64, .8)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .7)',
          'rgba(255, 206, 88.8)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255,.9)',
          'rgba(255, 159, 64,.8)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .8)',
          'rgba(255, 206, 88, .9)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, .9)',
          'rgba(255, 159, 64, .8)',
          'rgba(255, 99, 132,1)',
          'rgba(54, 162, 235.9)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


if (localStorage.chai) {
  allArray = JSON.parse(localStorage.chai);
} else {
  new ImgMaker('bag', 'img/bag.jpg');
  new ImgMaker('banana', 'img/banana.jpg');
  new ImgMaker('bathroom', 'img/bathroom.jpg');
  new ImgMaker('boots', 'img/boots.jpg');
  new ImgMaker('breakfast', 'img/breakfast.jpg');
  new ImgMaker('bubblegum', 'img/bubblegum.jpg');
  new ImgMaker('chair', 'img/chair.jpg');
  new ImgMaker('cthulhu', 'img/cthulhu.jpg');
  new ImgMaker('dog-duck', 'img/dog-duck.jpg');
  new ImgMaker('dragon', 'img/dragon.jpg');
  new ImgMaker('pen', 'img/pen.jpg');
  new ImgMaker('pet-sweep', 'img/pet-sweep.jpg');
  new ImgMaker('scissors', 'img/scissors.jpg');
  new ImgMaker('shark', 'img/shark.jpg');
  new ImgMaker('sweep', 'img/sweep.jpg');
  new ImgMaker('tauntaun', 'img/tauntaun.jpg');
  new ImgMaker('unicorn', 'img/unicorn.jpg');
  new ImgMaker('usb', 'img/usb.jpg');
  new ImgMaker('water-can', 'img/water-can.jpg');
  new ImgMaker('wine-glass', 'img/wine-glass.jpg');
}
randomPic();
render();
imgrool.addEventListener('click', handleClick);
