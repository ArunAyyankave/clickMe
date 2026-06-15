

let btn = document.querySelector("button")
let predict =  document.querySelector(".prediction")


let moved = false

btn.addEventListener("mouseover",function(){

    if(!moved){
        btn.style.marginLeft = "270px"
        moved = true
    }else{
        btn.style.marginLeft = "0px"
        moved = false
    }

})

setTimeout(function(){
    btn.style.display = "none"
    predict.innerText = "Sorry.. You don't have a futre!"
},10000)