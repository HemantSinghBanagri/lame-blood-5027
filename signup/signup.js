var passwordInput=document.querySelector("#password");
var visiblePassword=document.querySelector("#seen");
visiblePassword.addEventListener("click",function(){
    var type=passwordInput.getAttribute("type")
    if(type==="password"){
        type="text";
    }
    else{
        type="password"
    }
 
   console.log(type)
    passwordInput.setAttribute("type",type)
   this.classList.toggle("fa-eye-slash")
    

})

var arrow=document.querySelector("#backArrow").addEventListener("click",function(){
    window.history.back();
})

//user data//

var signUp_data=document.querySelector("form");
var inpt=document.querySelectorAll(".error")


var signUpData=JSON.parse(localStorage.getItem("SignUpData"))||[]
signUp_data.addEventListener("submit",function(){
event.preventDefault();
var SupData={
    email:signUp_data.email.value,
    Fname:signUp_data.Fname.value,
    Sname:signUp_data.Sname.value,
    password:signUp_data.password.value,
}
signUpData.push(SupData)
if(SupData.email===""){
 var p= document.querySelector("#alert1")
 p.innerText="Please enter your email address!";
 

 inpt(function(inpt){
    inpt.style.borderColor="red";
    inpt.style.borderWidth="2px"
 })
 
 
}else if(SupData.Fname===""){
    var p= document.querySelector("#alert2")
    p.innerText="Please enter your name!";
    
   
    inpt(function(inpt){
       inpt.style.borderColor="red";
       inpt.style.borderWidth="2px"
    })
    
}
else if(SupData.Sname===""){
    var p= document.querySelector("#alert3")
    p.innerText="Please enter your surname!";
    
   
    inpt(function(inpt){
       inpt.style.borderColor="red";
       inpt.style.borderWidth="2px"
    })
}

else if(SupData.password===""){
        var p= document.querySelector("#alert4")
        p.innerText="Please enter your password!";
        
       
        inpt(function(inpt){
           inpt.style.borderColor="red";
           inpt.style.borderWidth="2px"
        })
    
}
else{
localStorage.setItem("SignUpData",JSON.stringify(signUpData))
var p= document.querySelector("#alert5")
p.innerText="";


 inpt.forEach(function(inpt){
    inpt.style.borderColor="unset";
    inpt.style.borderWidth="1px"
 })
 
 window.location.href="welcome.html"

}
})


