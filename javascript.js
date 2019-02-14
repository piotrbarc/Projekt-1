let canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

base();



function base()
{
  pic = new Image();
  pic.src = '1.jpg';
  pic.onload = () =>{
    context.drawImage(pic, 0, 0);
  }
}
