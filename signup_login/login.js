var passIn=document.querySelector("#password");
var seePass=document.querySelector("#seen");
seePass.addEventListener("click",function(){
    var type=passIn.getAttribute("type")
    if(type==="password"){
        type="text";
    }
    else{
        type="password"
    }
 
   console.log(type)
    passIn.setAttribute("type",type)

   this.classList.toggle("fa-eye-slash")
    

})

var arrow=document.querySelector("#backArrow").addEventListener("click",function(){
    window.history.back();
})

//log in user //
 var getUserData=JSON.parse(localStorage.getItem("SignUpData"));
            

var loginForm=document.querySelector("form");
var inpt=document.querySelectorAll(".error")
var p= document.querySelector("#alert")
var pEml= document.querySelector("#p-email")
var pWrd= document.querySelector("#pss-wrd")
var  show_alert=document.querySelector(".show-alert")
   
loginForm.addEventListener("submit",function(){
   event.preventDefault();

   var LoginData={
       email:loginForm.email.value,
      
       password:loginForm.password.value,
   }

if( getUserData==null){
    alert("User Not Exist !")
}

else{
if( LoginData.email===""||LoginData.password===""){
 
 p.innerText="Please Fill All The Information !";
 show_alert.classList.remove("visible-alert")
 
 inpt(function(inpt){
    inpt.style.borderColor="red";
    inpt.style.borderWidth="2px"
 })
 
}
else{
    var flag=false;
    var flagpass
    for(var i=0;i<getUserData.length;i++){
        console.log(LoginData.email)
    if(LoginData.email===getUserData[i].email&&LoginData. password===getUserData[i]. password){
        var user=getUserData[i].Fname
       
      localStorage.setItem("Username",JSON.stringify( user))
      localStorage.setItem("loginData",JSON.stringify(getUserData[i]))
       flag=true;
       flagpass=true;
    }
  

}
   if(flag!==true&&flagpass!==true){

    show_alert.classList.add("visible-alert")
    
   
   }
   else{
    
    show_alert.classList.remove("visible-alert")
    
    window.location.href="../index.html";
   
   
   
   }

}
}

})