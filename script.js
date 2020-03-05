/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

let canvasNumber=0;

let size=4
function cambia() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let w = ctx.canvas.width;
  let h = ctx.canvas.height;
  let sizep=document.getElementById("size")
  sizep.innerHTML=`${size}`
  ctx.fillStyle='white'
 ctx.fillRect(0,0,w,h);
  canvasNumber? draw(): draw2() ;
  canvasNumber = (canvasNumber +1)%2
}




function draw() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let w = ctx.canvas.width;
  let h = ctx.canvas.height;
  console.log(w);
//  let size = 15;
  //  ctx.fillRect(10, 10, 200, 200);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      ctx.fillStyle = `rgb(${i * 20},${j * 30},90)`;
      //ctx.fillStyle='red'
      ctx.fillRect(
        (i * w) / size - Math.random() * 10,
        (j * h) / size - Math.random() * 10,
        w / size - Math.floor(Math.random() * 10),
        h / size - Math.floor(Math.random() * 10)
      );

      // ctx.beginPath();
      //ctx.moveTo(i*w/size,j*h/size);
      //ctx.arc(i*w/size+w/(2*size),j*h/size+h/(2*size),20,0,2*Math.PI*j/(i+1),1)
      //       ctx.arc(i*w/size,j*h/size,20,0,3,1)
      //   ctx.stroke();
      // ctx.closePath();
      /*       ctx.fillStyle = `rgb(${i * 40},${j * 20},60)`;
      ctx.beginPath();
      //ctx.moveTo((i * w) / size, (j * h) / size);
      ctx.arc(
        (i * w) / size + w / (2 * size),
        (j * h) / size + h / (2 * size),
        10,
        0,
        (2 * Math.PI * j) / (i + 1),
        1
      );
      //       ctx.arc(i*w/size,j*h/size,20,0,3,1)
         ctx.fill();
      ctx.closePath();
      */
    }
  }
}

function draw2() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let w = ctx.canvas.width;
  let h = ctx.canvas.height;
  /* console.log(w);*/
//  let size = 2;
  //  ctx.fillRect(10, 10, 200, 200);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      
      
      ctx.strokeStyle = `rgb(${i * 20},${j * 30},8
0)`;
      ctx.strokeRect(i*w/size,j*h/size,w/size,h/size);
      ctx.beginPath();
      ctx.moveTo(i * w/size + w / (2 * size), j * h/size + h / (2 * size));
    //  ctx.lineTo(200,200);
      for (let k = 0; k < 10; k++) {
        ctx.lineTo(
          i * w/size + w / (2 * size) + ((Math.random() - 0.5) * w*1.3) / (size * 2),
          j * h/size + h / (2 * size) + ((Math.random() - 0.5) * h*1.3) / (size * 2)
        );
        console.log('*')
      }
      ctx.stroke();
      ctx.closePath();
      console.log("linea",i,j)
    }
  }
}

