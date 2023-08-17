const Form = document.querySelector(".form")
const Name = document.getElementById("name")
const Email = document.getElementById("email")
const Password = document.getElementById("password")
const btn = document.querySelector(".btn")

let message = document.querySelector(".text")

let error = []

Form.addEventListener("submit",(e)=>{
    

    if( Name.value ===" " || Name.value ===null ){
       error.push("please fill in the name")
      
    }
     
   if(Email.value === " " || Email.value ===null ){
        error.push("please fill in your Email")
       
    }

    if( Password.value.length <= 5){
        error.push("password must not be less than 5 characters")
       
    }
    

    if( Password.value.length >= 15){
       error.push("password must not be more than 15 characters")
       
    }

    e.preventDefault()
    message.innerHTML = error.join(",") 
   
   
})











