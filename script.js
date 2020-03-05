/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

let canvasNumber = 0;

let size = 4;
function cambia() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let w = ctx.canvas.width;
  let h = ctx.canvas.height;
  let sizep = document.getElementById("size");
  sizep.innerHTML = `${size}`;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  draw();
  canvasNumber = (canvasNumber + 1) % 2;
}

/*
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
      ctx.strokeStyle = `rgb(${i * 10},${j * 10},30)`;
      ctx.strokeRect((i * w) / size, (j * h) / size, w / size, h / size);
      
      ctx.beginPath();
            ctx.strokeStyle = `rgb(${i*10},${j*10},i*j)`;


      ctx.moveTo(
        (i * w) / size + w / (2 * size),
        (j * h) / size + h / (2 * size)
      );
      //  ctx.lineTo(200,200);
      for (let k = 0; k < 6; k++) {
        // ctx.lineTo(
        // i * w/size + w / (2 * size) + ((Math.random() - 0.5) * w*1.3) / (size * 2),
        //j * h/size + h / (2 * size) + ((Math.random() - 0.5) * h*1.3) / (size * 2)
        //);
        /*
        ctx.quadraticCurveTo(
          (i * w) / size +
            w / (2 * size) +
            ((Math.random() - 0.5) * w * 1.3) / (size * 2),
          (j * h) / size +
            h / (2 * size) +
            ((Math.random() - 0.5) * h * 1.3) / (size * 2),
          (i * w) / size + w / (2 * size) + ((Math.random() - 0.5) * w * 1.3)/(size*2),
          (j * h) / size +
            h / (2 * size) +
            ((Math.random() - 0.5) * h * 1.3) / (size * 2)
        );
        
        ctx.bezierCurveTo(
          (i * w) / size +
            w / (2 * size) +
            ((Math.random() - 0.5) * w * 1.3) / (size * 2),
          (j * h) / size +
            h / (2 * size) +
            ((Math.random() - 0.5) * h * 1.3) / (size * 2),
          (i * w) / size +
            w / (2 * size) +
            ((Math.random() - 0.5) * w * 1.3) / (size * 2),
          (j * h) / size +
            h / (2 * size) +
            ((Math.random() - 0.5) * h * 1.3) / (size * 2),
          (i * w) / size +
            w / (2 * size) +
            ((Math.random() - 0.5) * w) / (size * 2),
          (j * h) / size +
            h / (2 * size) +
            ((Math.random() - 0.5) * h) / (size * 2)
        );
        console.log("*");
      }
                  ctx.strokeStyle = `rgb(${i*20},${j*30},90)`;


      ctx.stroke()


      ctx.closePath();
      ctx.strokeStyle = `rgb(${i*20},${j*30},90)`;
     // console.log("linea", i, j);
      /*     
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
      
    }
  }
}
*/

size=12
let time=0
function draw() {
  time++
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let w = ctx.canvas.width;
  let h = ctx.canvas.height;
 // console.log(w);
  ctx.clearRect(0,0,w,h)
  for (let i = 0; i < size; i++){
    /*
    ctx.save();
    ctx.translate(w/2,h/2);
    ctx.rotate(Math.PI*2/360*time)
    ctx.rotate(Math.PI*2/size *i);
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.strokeStyle=`rgb(${i*30},${i*10},${i*30})`
    ctx.lineTo(100-i*3,0)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc(120-i*3,0,20,0, Math.PI * 2, true)
    ctx.fillStyle=`rgb(${i*10},${i*20},${i*30})`
    ctx.fill()
    ctx.closePath()
    ctx.restore()
    */
   ctx.save()
    ctx.translate(w/2,h/2)
    ctx.rotate(-2*Math.PI*2/360*time)
    ctx.rotate(Math.PI*2/(2*size) *(2*i+1))
   /* ctx.beginPath()
    ctx.strokeStyle=`rgb(${i*30},${i*20},${i*30})`
    ctx.moveTo(0,0)
    ctx.lineTo(100-i*5,0)
    ctx.stroke()
    ctx.closePath()
    */
    ctx.fillStyle=`rgb(${i*10},${i*20},${i*10})`
    ctx.translate(100-i*5,0)
    ctx.rotate(Math.PI*2/size *i)
    ctx.rotate(Math.PI*2/180*time)
  //  ctx.fillRect(0,0,30,10*i)
        ctx.fillRect(0,0,30,40)

    ctx.restore()
  }
  
}
setInterval( draw, 20);
