var iter = 256;
var width = 1000;
var heigth = 1000;
var resolutionX = 1280;
var resolutionY = 800;
var a = 1;
var b = -0.221;
var c = -0.713;
function setup(){
  createCanvas(1000, 1000);
  for(var i=0;i<1000;i++){
    for(var j=0;j<1000;j++){
      var intensity = test(a, b, c, (i*1.0-height/2)/height, (j*1.0-width/2)/width);
      set(i , j, color(255, 224, 0, intensity));
    }
  }
  updatePixels();
  saveCanvas('JuliaSet', 'jpg');
}

function draw() {

}
function f(a, b, c, d, e){
  return [a*d*d-a*e*e+b, 2*a*d*e+c];
}
function test(a, b, c, d, e){
  var real = d;
  var img = e;
  var max = iter - 1;
  for(var i=0;i<iter;i++){
    var complex = f(a, b, c, real, img);
    real = complex[0];
    img = complex[1];
    if(sqrt(real*real + img*img) > 2){
      max = i+1;
      break;
    }
  }
  return max;
}
