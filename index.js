let dicearray=[
   {src:"images/1.jpg"},{src:"images/2.jpg"},{src:"images/3.jpg"},{src:"images/4.jpg"},{src:"images/5.jpg"},{src:"images/6.jpg"}];
function deemo()
{
let randomnumber1;
randomnumber1=(Math.floor( Math.random()*dicearray.length));
document.canvas.src=dicearray[randomnumber1];

}