

const clickme=()=>{
    let ele=document.getElementById("count-box");
    let c=Number(ele.innerText);

    c++;
    ele.innerText=c;
}

function reset(){
    let ele=document.getElementById("count-box");
    ele.innerText=0;
}