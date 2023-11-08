let color="black"
let click=false;
document.addEventListener("DOMContentLoaded",()=>{
 createBoard(32)

 document.querySelector("body").addEventListener('click',function(e){
   if(e.target.tagname!="BUTTON")
   click=!click;
let draw=document.querySelector("#draw");
    if(click){
        draw.innerHTML="now you ca Draw"
    }
    else{
        draw.innerHTML="you re now allowed top draw"
    }

 })
 let btn_popup=document.querySelector('#popup');
 btn_popup.addEventListener("click",function(){
    let size=getSize();
    createBoard(size)
 })
})
function createBoard(size){
    let board=document.querySelector(".board")
board.style.gridTemplateColumns=`repeat(${size},1fr)`;
board.style.gridTemplateRows=`repeat(${size},1fr)`;

let numDivs=size*size;
for(let i=0;i<numDivs;i++){
    let div=document.createElement("div")
  div.addEventListener("mouseover",colorDiv)
    board.insertAdjacentElement("beforeend",div);
}
}
function getSize(){
    let input=prompt("what will be size of the board")
    let messgae=document.querySelector('#message')
    if(input==""){
          messgae.innerHTML="provide a number"
    }
    else if(input<0 || input>100)
    {
        messgae.innerHTML="provide  a number between  an 100"
    }
    else{
        messgae.innerHTML="start drawing inside the board"
        return input;
    }
}

function colorDiv(){
    if( click){
        if(color=='random'){
            this.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`
          }
          else{
            this.style.backgroundColor="black"
          }
    }
  
}
function setColor(colorchoice){
     color=colorchoice;

}
function reset(){
    let divs=document.querySelectorAll('div');
    divs.forEach((div)=>{
        div.style.backgroundColor="white"
    })   
}










