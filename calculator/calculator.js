let display = document.querySelector(".calculations")
let buttons = document.querySelectorAll(".keys")

buttons.forEach(button=>{
    button.addEventListener("click",()=>{

        let value = button.innerText
        console.log(value)

        if(value ==="C"){
            display.value=""
        }

        else if(value==="="){
            try{
                display.value = eval(display.value)

            }catch{display.value = "Error"}
        }
        else{
            display.value+=value
        }
    }





)
})