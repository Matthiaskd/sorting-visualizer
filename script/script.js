var gen; //generate button
var bubble; //bubble sort button
var insertion;//insert_sort button
var c; // canvas
var current_x =0;// current position in the array
var width=4; //width of the rectangles
var array_length=100;
var index_i=-1;//the compared value
var index_j=-1;//the value with which index_i is compared
var span=4;//space between rectangles

var memory=100;


//var rect_width=2;//width of the rectangles
var length_slider=document.getElementById("slider2");
var speed_slider=document.getElementById("slider");
var sleep_time;
var init_x_position=0;

var is_generated=false;


var c= document.getElementById("mycanvas");
var ctx= c.getContext("2d"); // drawer
gen=document.getElementById("gen");
bubble=document.getElementById("bubble_sort");
insertion=document.getElementById("insertion");


//array_length=length_slider.value;


var current_array= generate_array(array_length);


//functions:
function generate_array(n){
  unsorted=[];
  for (var i = 0; i < array_length; i++) {
    unsorted.push(Math.floor(Math.random()*70)+1);
  }
  return unsorted;
}


function draw_rect(value,x, w){
  ctx.fillRect(x, 450-value*5, w, value*5);
}


function print_array(array){
  current_x=init_x_position;//reset position
  c.width=c.width;//reset canvas
  for (var i = 0; i < array_length; i++) {
    if (index_i==i) {
      ctx.fillStyle="green";
      draw_rect(array[i], current_x,width);
      current_x+=width;
      current_x+=span;
    }
    else if (index_j==i) {
      ctx.fillStyle="red";
      draw_rect(array[i], current_x,width);
      current_x+=width;
      current_x+=span;
    }
    else {
      ctx.fillStyle="turquoise";
      draw_rect(array[i], current_x,width);
      current_x+=width;
      current_x+=span;
    }

  }
}



//remove href from hyperlinks
//generates and prints an array
function generate(){
  is_generated=true;
  current_array=generate_array(array_length);
  print_array(current_array);
}

//needed to set a delay
function sleep(ms){
  return new Promise((resolve)=> setTimeout(resolve,ms))
}



length_slider.oninput= function(){
  if (this.value>memory) {
    init_x_position-=(this.value-memory)*2;
    width-=(this.value-memory);
    span-=(this.value-memory);
  }

  else if (this.value<memory) {
    init_x_position+=(memory-this.value)*2;
    width+=(memory-this.value);
    span+=(memory-this.value);
  }
  memory=this.value;
  array_length=Math.floor(800/(width+span));

  if (is_generated) {
    generate();
  }
}
speed_slider.oninput= function(){
  sleep_time=this.value;
}



gen.addEventListener('click', generate);
