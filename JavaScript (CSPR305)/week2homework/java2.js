let username="";
let password="";

username=window.prompt("Please enter your username.")

if (username=="myname123"){
  password=window.prompt("Please enter your password.");
}

else {
  document.write("Please enter the correct username.");
}

if (password=="12345"){
  document.write("Welcome");
}

else (password!="12345"){
  document.write("Please enter the correct password.");
}

//why are both else statements showing up?
