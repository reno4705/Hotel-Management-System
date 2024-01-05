
const userid=document.getElementById("userid");
const password=document.getElementById("password");
const showpassword=document.getElementById("showpassword");
const usertype=document.getElementById("usertype");
const login=document.getElementById("login");
const reset=document.getElementById("reset");
const signup=document.getElementById("signup");

login.addEventListener("click",function(){
  if(userid.value==="" ||password.value===""||usertype.value===""){
    alert("Enter all Neccessary feilds");
  }else if(usertype.value=="Admin"){
    window.location.href="admin.html";
  }else if(usertype.value=="Guest"){
    window.location.href="guest.html";
  }else if(usertype.value=="Employees"){
    window.location.href="employee.html";
  }
})

function check(){
  if(showpassword.checked===true){
    password.type="email";
  }else{
    password.type="password";
  }
}

reset.addEventListener("click",function(){
  userid.value="";
  password.value="";
  usertype.value="";
})

signup.addEventListener("click",function(){
  window.location.href="./signup.html";
})