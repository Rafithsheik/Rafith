function submit(){
    let a=document.getElementById("box3")
    let b=document.getElementById('box4')
    let out = document.getElementById('out')
    b.value = a.value
    a.value = ' '

    if(b.value.length <=0 ){
        out.innerHTML = 'Enter a value'
    }
    else{
        out.innerHTML = 'success'
    }
}


function del(){
    let a=document.getElementById("box3")
    let b=document.getElementById('box4')
    b.value = ' ';
}
function edit(){
    let a=document.getElementById("box3")
    let b=document.getElementById('box4')
}

// if(a!="")
// {
//     let e=document.getElementById("box3");
//     let f=document.getElementById("box4");
//     let b=document.getElementById("out").innerHTML=("correct number");
// }
// else
// {
//     let c=document.getElementById("out").innerHTML=("Enter the valid Number");
// }
// function del(){
//     let d=document.getElementsById("box4");
//     d.remove();
// }}


