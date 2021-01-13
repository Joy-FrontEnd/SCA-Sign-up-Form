let form = document.getElementById('form')
let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')
let email = document.getElementById('email')
let company = document.getElementById('company')
let phone = document.getElementById('phone')
let message = document.getElementById('help')
let hear = document.getElementById('hear-us')


function validateInput(){
  //first name
if (firstName.value.trim()=== "" ) {
 onError(firstName, "First name cannot be empty");


}else{
onSuccess(firstName);
}

//last name

if (lastName.value.trim()=== "" ) {
 onError(lastName, "Last name cannot be empty");

}else{
onSuccess(lastName);

}

//email
if (email.value.trim()=== "") {
  onError(email, "Email cannot be empty")


}else{
  if (!isValidEmail(email.value.trim())) {
     onError(email, "Email is not valid")
     

  }else{
    onSuccess(email);
    
  }
}
//company

if (company.value.trim()=== "" ) {
 onError(company, "Company details cannot be empty");


}else{
onSuccess(company);
}

//message

if (message.value === "" ) {
 onError(message, "Details cannot be empty");
 

}else{
onSuccess(message);

}

//hear about us

if (hear.value.trim()=== "" ) {
 onError(hear, "This field cannot be empty");

}else{
onSuccess(hear);

}


}

document.querySelector("button").addEventListener("click", (event)=>{
      event.preventDefault();
      validateInput();
});

function onSuccess(input){
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "hidden";
  messageEle.innerText = " ";
  parent.classList.remove("error")
  parent.classList.add("success")
  window.location.href="message.html";
}

function onError(input, message){
  let parent = input.parentElement;;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
  parent.classList.add("error")
  parent.classList.remove("success")
}

function isValidEmail(email){
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}