
 var Mt_triger=document.querySelector("#More-trvl");
 var callpop=document.querySelector(".popUp-cont");
 var bodyr=document.querySelector("body");
 var count=0;
 var countsign=0;
 
  
 bodyr.addEventListener("click",function(e){
  if(e.target!==bodyr)return;
  else{
  callpop.classList.remove("triger-pop");
  show_sinbar.classList.remove("show-singbar");
  aftre_logn.classList.remove("show-login");
 
  }

  count=0;
  countsign=0;
 })

  //Travel//
  
  Mt_triger.addEventListener("click",function(e){
      count++;
   if(count%2!==0){
    callpop.classList.add("triger-pop")
   
    
    show_sinbar.classList.remove("show-singbar")
    countsign=0;
   
   }
   else
   {
    callpop.classList.remove("triger-pop")
   }
   
  })

 


   //  logo//
  var bodd=document.querySelector("body")
var expdia=document.querySelector("#logo");

expdia.addEventListener("click",function(){
  window.location.href="../index.html";
})




//sigining//

var sign_triger=document.querySelector("#sign-in");
console.log(sign_triger.innerText)



var show_sinbar=document.querySelector(".signIn-pop")
var aftre_logn=document.querySelector(".After-login");
var getUsername=JSON.parse(localStorage.getItem("Username"));
var hiname=document.querySelector("#User-Id");
var email_id=document.querySelector("#email-Id")
if(getUsername!==null){
  
  sign_triger.innerText=getUsername;
 
  sign_triger.style.fontSize="16px"
  
 
}

var getLogin=JSON.parse(localStorage.getItem("loginData"))
document.querySelector("#signOut").addEventListener("click",function(){
  localStorage.removeItem("loginData");
  localStorage.removeItem("Username");
  window.location.reload();

})
sign_triger.addEventListener("click",function(){
  countsign++;
  console.log(countsign)
  if(getUsername!==null){
    if( countsign%2!==0){
      
      hiname.innerText="Hi,"+getLogin.Fname;
      email_id.innerText=getLogin.email
    aftre_logn.classList.add("show-login");
    }
    else
    {
      aftre_logn.classList.remove("show-login")
    }
  }
    else{
  
  if( countsign%2!==0){
    show_sinbar.classList.add("show-singbar")
    callpop.classList.remove("triger-pop")
count=0;
   
  
  }
  else
  {
    show_sinbar.classList.remove("show-singbar")
  }
}

})




var signIn_redirect=document.querySelector("#redt-signIn");
var signUp_redirect=document.querySelector("#redt-signUp");

signIn_redirect.addEventListener("click",function(){
  window.location.href="../signup_login/login.html"
})

signUp_redirect.addEventListener("click",function(){
  window.location.href="../signup_login/signup.html"
})








var srchbtn=document.querySelector("#srchButton").addEventListener("click",function(){
  if(getUsername!==null){
  window.location.href="../index.css";
  }
  else{
    alert("Please Sign in First")
    window.location.href="../signup_login/login.html";
  }
})




