const strt=document.querySelector(".start");
const restrt=document.querySelector(".restart");
const stp=document.querySelector(".stop");

const min=document.querySelector(".min");
const sec=document.querySelector(".sec");
const millisec=document.querySelector(".milsec");


strt.addEventListener("click",startStopwatch);
restrt.addEventListener("click",stopStopwatch);
stp.addEventListener("click", restartStopwatch);

let a;
let s=0;
let ms=0;
let m=0;
function startStopwatch(){
    strt.disabled=true;
    restrt.disabled=false;
    stp.disabled=false;
    ms++;
   // millisec.innerHTML=ms;// for reference
   millisec.innerHTML=(ms<=9) ? "0"+ms:ms
    if(ms==100){
        ms=0;
        s++
        if(s==60){
            s=0;
            m++
           //min.innerHTML=m;
           min.innerHTML=(m<=9) ? "0"+m:m;
        }
        // sec.innerHTML=s;
        sec.innerHTML=(s<=9)  ?  "0"+s:s;
    }
  a=setTimeout(startStopwatch,10)
}

function stopStopwatch(){
 clearTimeout(a);
 strt.disabled=false;
 restrt.disabled=false;
 stp.disabled=true;
}
function restartStopwatch(){
    
    s=0;
    ms=0;
    m=0;
    clearTimeout(a);
    min.innerHTML="00";
    sec.innerHTML="00";
    millisec.innerHTML="00";
    strt.disabled=false;
    restrt.disabled=true;
    stp.disabled=false;
}