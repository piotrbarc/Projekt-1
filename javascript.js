let canvas = document.querySelector(`#canvas`)
let ctx = canvas.getContext(`2d`);
// adding image
const image = document.querySelector(`#source`);
ctx.drawImage(image, 0,0 , 698, 298);



// draw in canvas

let mouse = {x: 0, y: 0};


ctx.lineWidth = 3;
ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.strokeStyle = `#000000`;
 
canvas.addEventListener(`mousemove`, function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  }, false);
canvas.addEventListener(`mousedown`, (e) => {e
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener(`mousemove`, onPaint, false);
}, false);
 
canvas.addEventListener(`mouseup`, () => {
    canvas.removeEventListener(`mousemove`, onPaint, false);
}, false);
 
let onPaint = () => {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};
newFunction = () => {
    return `mousemove`;
}

//change color



const red = document.querySelector(`#red`);
const green = document.querySelector(`#green`);
const yellow = document.querySelector(`#yellow`);
const black = document.querySelector(`#black`);

red.addEventListener(`click`, () => {

    ctx.strokeStyle = "#FF0000";

})

green.addEventListener(`click`, () => {

    ctx.strokeStyle = "#00FF7F";

})

black.addEventListener(`click`, () => {

    ctx.strokeStyle = `#000000`;

})

yellow.addEventListener(`click`, () => {

    ctx.strokeStyle = "#FFFF00";

})

