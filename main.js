img="";
status= "";
objects= [];
function preload() {
  img= loadImage("images.jpeg");
}

function setup() {
  canvas= createCanvas(640,420);
  canvas.center();
  objectDetector= ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML= "Status: Baby Detected :D";
}


function modelLoaded() {
  console.log("MODEL LOADED YAYAYAYA") 
  status= true
  objectDetector.detect(img,gotResult);
 }
function gotResult(error,results) {
 if (error) {
   console.error(error)
}
else {
 console.log(results); 
 objects= results;
}
}


function draw() {
    image(img,0,0,640,420);
   if (status != "") {
    for (i=0; i <= objects.length-1; i++) {
     document.getElementById("status").innerHTML= Status= "Status: Object Detected";
     fill("#03e8fc");
    noFill();
    stroke("#03e8fc")
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    accuracy= floor(objects[i].confidence*100);
    text(objects[i].label+" "+accuracy+"%",objects[i].x+15,objects[i].y+15);
    } 


    
    
    
    
   }
    
}


