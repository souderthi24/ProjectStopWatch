
var hr = 0;
var min = 0;

var sec = 0;

var count = 0;


var timer = false; //decides whether timer / stopwatch is running or halted....

function start(){
    timer = true;
    stopWatch();
}

function stop(){
    timer = false;
}


function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopWatch(){
    if(timer == true){
         
        count+=1;
        
        if(count == 100){
            sec+=1;
            count = 0;
        }
        if(sec == 60){
            min+=1;
            sec = 0;
        }
        if(min == 60){
            hr+=1;
            min = 0;
            sec = 0;
        }

        var hrStr = hr;
        var minStr = min;
        var secStr = sec;

        var countStr = count;

        if(hr < 10){
            hrStr = "0" + hrStr;
        }

        if(min < 10){
            minStr = "0" + minStr;
        }

        if(sec < 10){
            secStr = "0" + secStr;
        }

        if(count < 10){
            countStr = "0" + countStr;
        }


        document.getElementById("hr").innerHTML = hrStr;
        document.getElementById("min").innerHTML = minStr;
        document.getElementById("sec").innerHTML = secStr;

        document.getElementById("count").innerHTML = countStr;

        setTimeout("stopWatch()",10);
    }
}
