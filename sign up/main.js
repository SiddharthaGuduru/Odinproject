document.addEventListener("dDOMContentLoaded",function(){

   let password =document.querySelector("#password").Value;
   let confirmPassword=document.querySelector("#confirmPassword").value;

   let error=document.querySelector('#error')
    if(password =="" && confirmPassword ==""){
        error.innerHTML="*password do not match"
    }
    if(password===confirmPassword){
        error.innerHTML=""
    }
})