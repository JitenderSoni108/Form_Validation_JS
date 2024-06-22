const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');




//add event

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
})

const sendData=(sRate,count,usernameVal)=>{

    if(sRate===count){
        alert('Registeration successfully ');
        swal("welcome "+usernameVal+" Registeration successful ","success");
        
    }
}
//for final data validation

const successMsg=(usernameVal)=>{
let formcon = document.getElementsByClassName('form-control');
var count = formcon.length-1;
for(var i = 0; i<formcon.length; i++){
    if(formcon[i].className==='form-control success'){
        var sRate = 0+i;
        sendData(sRate,count,usernameVal);
    }else{
        return false;
    }
}
}
//define the validate function

const validate = ()=>{
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();



    // more email validate

    const isEmail = (emailVal)=>{

        var atSymbol=emailVal.indexOf('@');
        if(atSymbol<1) return false;
        var dot = emailVal.lastIndexOf('.');
        if(dot<= atSymbol+2) return false;
        if(dot===emailVal.length-1) return false;
        return true;

     }
    //validate username

    if(usernameVal===""){
        setErrorMsg(username,'username cannot be blank');
    }else if(usernameVal.length<=2){
        setErrorMsg(username,'username min 3 chracter');
    }else{
        setSuccessMsg(username);
    }

      //validate email

      if(emailVal===""){
        setErrorMsg(email,'Email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email,'Not a valid Email');
    }else{
        setSuccessMsg(email);
    }

     //validate phone

     if(phoneVal===""){
        setErrorMsg(phone,'phone cannot be blank');
    }else if(phoneVal.length!=10){
        setErrorMsg(phone,'Not a valid Phone Number');
    }else{
        setSuccessMsg(phone);
    }

    //validate password

    if(passwordVal===""){
        setErrorMsg(password,'password cannot be blank');
    }else if(passwordVal.length<=5){
        setErrorMsg(password,'Minimum 6 Character');
    }else{
        setSuccessMsg(password);
    }

      //validate cpassword

      if(cpasswordVal===""){
        setErrorMsg(cpassword,'password cannot be blank');
    }else if(passwordVal!==cpasswordVal){
        setErrorMsg(cpassword,'Password did not match');
    }else{
        setSuccessMsg(cpassword);
    }
    successMsg(usernameVal);
}

    
    function setErrorMsg(input,errormsgs){
        console.log('errorclicked');
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className="form-control error";
        small.innerText = errormsgs;
    }

    function setSuccessMsg(input){
        console.log('successclicked');
        const formControl = input.parentElement;
        formControl.className="form-control success";
    }
