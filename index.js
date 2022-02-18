let div = document.createElement('div'); 
let textNode = document.createTextNode('1.Колобок повесился, Буратино утонул, негр умер своей смертью.'); 
document.body.append(div); 
div.append(textNode); 
 
let div1 = document.createElement('div'); 
let textNode1 = document.createTextNode('2.Что изучает женщина-программист?Блендер'); 
document.body.append(div1); 
div1.append(textNode1); 
 
let div2 = document.createElement('div'); 
let textNode2 = document.createTextNode('3.У гея-кортежника не только козырь в рукаве, но и черви в жопе'); 
document.body.append(div2); 
div2.append(textNode2); 

div.classList.add('goose'); 
let goose = document.querySelector('.goose'); 
goose.style.margin="50px"; 
 
div1.classList.add('goose1'); 
let goose1 = document.querySelector('.goose1'); 
goose1.style.margin="50px"; 
 
div2.classList.add('goose2'); 
let goose2 = document.querySelector('.goose2'); 
goose2.style.margin="50px"; 
 
function multi(){ 
    
    let inp1=document.getElementById('inp_1').value, 
    inp_2=document.getElementById('inp_2').value; 
    let  inp_3=document.getElementById('inp_3').value=inp1*inp_2; 
    message.textContent =inp1*inp2; 
}