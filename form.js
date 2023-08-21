const Form = document.querySelector(".form")
const Name = document.getElementById("name")
const Email = document.getElementById("email")
const Password = document.getElementById("password")
const rePassword =  document.getElementById("re-password")
const btn = document.querySelector(".btn")

let message = document.querySelector(".text")

let error = []

Form.addEventListener("submit",(e)=>{
    
    e.preventDefault()

    if( Name.value ===" " || Name.value ===null ){
       error.push("please fill in the name")
    }

    if( Name.value.charAt(0) !== Name.value.charAt(0).toUpperCase()){
        error.push("please start with a capital letter")
     }
     
   if(Email.value === " " || Email.value ===null ){
        error.push("please fill in your Email")
    }

    if( Password.value.length < 8){
        error.push("password must not be less than 8 characters")
    }

    if( Password.value.length > 15){
       error.push("password must not be more than 15 characters")  
    }

    if( Password.value.length === " "){
        error.push(" input password")  
     }

    if(rePassword.value !== Password.value){
        error.push("password does not match")
    }

    
    message.innerHTML = error.join(",") 

   setTimeout(() => {
    message.innerHTML = " " 
   }, 3000);
   
   
})










