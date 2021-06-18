// let dicearray=new Array(
//    "images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg");
   let dicearray=[
      {
         text: "1",
         img:"images/1.jpg"
      },
      {
         text: "2",
         img:"images/2.jpg"
      },
   {
      text: "3",
         img:"images/3.jpg"
   },
   {
      text: "4",
         img:"images/4.jpg"
   },
   {
      text: "5",
         img:"images/5.jpg"
   },
   {
      text: "6",
         img:"images/6.jpg"
   },
   ];
function deemo()
{
let randomnumber1=(Math.floor( Math.random()*dicearray.length));
document.getElementById("randomimage").src=(dicearray.img[randomnumber1]);

}
function deemo1()
{
   let randomnumber2=(Math.floor( Math.random()*dicearray.length));
document.getElementById("randomimage1").src=dicearray[randomnumber2];
}
