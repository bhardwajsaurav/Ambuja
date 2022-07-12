const modalDown =()=>{


    document.getElementById("modal").style.top = "0"
    document.getElementById("nameHolder").innerText = document.getElementById("inputName").value
    document.getElementById("inputName").value = ""
    setTimeout(()=>{
        document.getElementById("submodal").style.top = 0 
    },1000)

}




const closeModal =()=>{
    document.getElementById("submodal").style.top = "-300%"
    setTimeout(()=>{
        document.getElementById("modal").style.top = "-100%" 
    },500)
}



const activeINput =()=>{
     document.getElementById("iframe").style.filter = "blur(5px)"
}

const UnActive =()=>{
    document.getElementById("iframe").style.filter = "blur(1px)"
}