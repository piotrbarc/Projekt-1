let canvas = document.querySelector(`#canvas`)
let ctx = canvas.getContext(`2d`);
const image = document.querySelector(`#source`);
ctx.drawImage(image, 0,0 , 698, 298);



let mouse = {x: 0, y: 0};
 


ctx.lineWidth = 3;
ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.strokeStyle = `#000000`;
 
canvas.addEventListener(`mousemove`, function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  }, false);
canvas.addEventListener(`mousedown`, (e) => {
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

