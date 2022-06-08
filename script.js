/* script animatie in header - via volgende link: https://codepen.io/gschier/embed/DLmXKJ?default-tab=js%2Cresult&theme-id=0  */
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap {  }"; 
  document.body.appendChild(css);
};



/* script effect van blokken  */
checkBoxes(".box");
checkBoxes(".box2");
checkBoxes(".box3");
checkBoxes(".box4");
checkBoxes(".box5");

function checkBoxes(effect) {
  const boxes = document.querySelectorAll(effect); //aanroepen van alle classes
  window.addEventListener("scroll", () => test(boxes)); //telkens als je scrollt, wordt de functie test uitgevoerd
}
function test(boxes) {
  const triggerBottom = (window.innerHeight / 5) * 4; //hoogte van de pagina vergelijken met de bovenkant van de boxes
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top; //als de pagina de top van de boxes heeft bereikt, deze tonen (of weghalen indien er wordt terug gescrold)
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}


// script interactieve animatie bij 'mouseover'
var   icon = document.getElementById('icon-api'),
      gif = document.getElementById('gif');

icon.addEventListener('mouseover', function(){
gif.style.display = "block";
}, true);
icon.addEventListener('mouseout', function(){
    gif.style.display = "none";
}, true);



