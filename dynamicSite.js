let i = 1000;
var x = setInterval(function(){
    var now = i--;
    document.getElementById("demo").innerHTML = now;
},1000);
    
