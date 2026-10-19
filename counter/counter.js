let counterelement = document.getElementById("counter_value");

function onIncrement(){
    let prevval = counterelement.textContent;
    let newcv = parseInt(prevval) + 1;
    counterelement.textContent = newcv;
    updateColor(newcv);
   
}

function onDecrement(){
    let prevval = counterelement.textContent;
    let newcv = parseInt(prevval) - 1;
    counterelement.textContent = newcv;
    updateColor(newcv);
}

function onReset(){
    let newcv = 0;
    counterelement.textContent = newcv;
    updateColor(0);
}

function updateColor(newcv){
 if(newcv>0){
        counterelement.style.color = "green";
    }
    else if(newcv<0){
        counterelement.style.color = "red";
    }
    else{
        counterelement.style.color ="black";
    }
}