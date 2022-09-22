 Reverse Tennis (?)

Create two objects with properties for the x, y, width, and height for a 'tall' rectangle. Set their 'x' properties so that when drawn, one will appear on the left side of the composition, and the other on the right side.


In the draw function,

draw both of the rectangles in the objects to the screen, based on their properties
if the up key is pressed, make the first object move up, and the second object move down
if the down key is pressed, make the first object move down, and the other object move up     

 //true condition to be executed 
  if (keyIsDown(UP_ARROW)) {
  rect = {height: "tall"} 
  rect.style.left

  //to be executed if previous statement is false
} else { ()
  rect = {height: "tall"};
  rect.style.right
}
//if true, when pressed down the object will move down 
if (keyIsDown(DOWN_ARROW)) {
  rect = {height: "tall"}
  rect.style.left
//this object will move up 
} else {
  rect = {height: "tall"}
  rect.style.right
}