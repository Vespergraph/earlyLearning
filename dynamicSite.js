const input = document.getElementById("timer");
const output = document.getElementById("demo");


function startTimer(){
    let inputValue = parseInt(input.value);
    let x = setInterval(function(){
        let m = Math.floor(inputValue/60);
        let s = inputValue % 60;   
        output.textContent = m + " minutes and "+ s + " seconds.";
        if(inputValue == 0){
            output.textContent = "Timer done"; 
            clearInterval(x);
        }
        inputValue--;
    },1000)}

