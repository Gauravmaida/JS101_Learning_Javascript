// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


 let user$name = "Gaurav maida";
let user$password = 111111;

let submit$name = "Gaurav maida";
let submit$password = 111111;

if(user$name==submit$name){
  if(user$password==submit$password){
    console.log("User can login");
  }
  else{
    console.log("Check password");
  }
}else{
  console.log("Check email")
}