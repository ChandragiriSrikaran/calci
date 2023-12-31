function one (){
    let x= document.getElementById("InputBt");
    x.value+=1;
}
function two(){
    let x=document.getElementById("InputBt");
    x.value+=2
}
function three(){
    let x=document.getElementById("InputBt");
    x.value+=3
}
function four (){
    let x= document.getElementById("InputBt");
    x.value+=4;
}
function five(){
    let x=document.getElementById("InputBt");
    x.value+=5
}
function six(){
    let x=document.getElementById("InputBt");
    x.value+=6
}
function seven(){
    let x=document.getElementById("InputBt");
    x.value+=7
}
function eight(){
    let x=document.getElementById("InputBt");
    x.value+=8
}
function nine(){
    let x=document.getElementById("InputBt");
    x.value+=9
}
function zero(){
    let x=document.getElementById("InputBt");
    x.value+=0
}

function dzero(){
    let x=document.getElementById("InputBt");
    x.value+="00"
}
function sum(){
    let x=document.getElementById("InputBt");
    x.value+="+"
}
function sub(){
    let x=document.getElementById("InputBt");
    x.value+="-"
}
function div()
{
    let x=document.getElementById("InputBt");
    x.value+="/"
}
function multiply()
{
    let x=document.getElementById("InputBt");
    x.value+="*"
}


// function clear_one(){
//     let x=document.getElementById("InputBt");
//     x.substring(0,x.length-1);
//     x.value;
// }


function del()
{
    let x=document.getElementById("InputBt");
    x= x.slice(0, -1); 
    b.value=x;
    

}
function ac()
{
    let x=document.getElementById("InputBt");
    x.value=" "
}
function equal(){
    let x=document.getElementById("InputBt");
    x.value=eval(x.value);
}

