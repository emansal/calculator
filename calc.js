let display=document.getElementById('display');

function appendToDisplay(input){
    display.value += input ;
}

function del(){
    display.value = display.value.slice(0,-1) ;
}

function clearDisplay(){
    display.value = "" ;
}

function calculate(){
    try{
        display.value = eval(display.value) ;
    }
    catch(error){
        display.value ="Error";
    }
}

let toggle = document.getElementById('toggleDark');
let body = document.querySelector('.parent');
toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
     body.classList.toggle('dark');
})

