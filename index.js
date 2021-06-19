let dicearray=new Array(
   "images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg");
   // let dicearray=[
   //    {
   //       text: "1",
   //       img:"images/1.jpg"
   //    },
   //    {
   //       text: "2",
   //       img:"images/2.jpg"
   //    },
   // {
   //    text: "3",
   //       img:"images/3.jpg"
   // },
   // {
   //    text: "4",
   //       img:"images/4.jpg"
   // },
   // {
   //    text: "5",
   //       img:"images/5.jpg"
   // },
   // {
   //    text: "6",
   //       img:"images/6.jpg"
   // },
   // ];
   let randomnumber1=(Math.floor( Math.random()*dicearray.length));
    

function deemo()
{
document.getElementById("randomimage").src=(dicearray[randomnumber1]);
}
let randomnumber2=(Math.floor( Math.random()*dicearray.length));

function deemo1()
{
document.getElementById("randomimage1").src=dicearray[randomnumber2];
}

function result()
{
   if (randomnumber1> randomnumber2)
   {
      document.querySelector("h1").innerHTML=" ⛳PLAYER1 WINS ";
      document.querySelector("h4").innerHTML=" to play again refresh the page ";
   }
   else if(randomnumber1<randomnumber2)
   {
      document.querySelector("h1").innerHTML=" ⛳PLAYER2 WINS ";
      document.querySelector("h4").innerHTML=" to play again refresh the page ";
   }
   else{
      document.querySelector("h1").innerHTML=" ⚡its a tie "
      document.querySelector("h4").innerHTML=" to play again refresh the page ";
   }
}
