function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm() {
    var returnVal = true;
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("fname", "Length is too short!");
        returnVal = false;
    }
    else {
        seterror("fname", "");
    }
    var Email = document.forms['myForm']["femail"].value;
    if (Email.length > 30) {
        seterror("femail", "Email is too Long!");
        returnVal = false;
    }
    else {
        seterror("femail", "");
    }
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length === "123456789") {
        seterror("fphone", "Number is not valid!");
        returnVal = false;
    }
    else if (phone.length!=10 ) {
        seterror("fphone", "Must be 10 digits!");
        returnVal = false;
    }
    else {
        seterror("fphone", "");
    }
    var Password = document.forms['myForm']["fpass"].value;
    if (Password === "Password" || Password === name) {
        seterror("fpass", "Please change your password!");
        returnVal = false;
    }
    else if(Password.length<8){
        seterror("fpass","Must be 8 digits!");
        returnVal=false;
    }
    else {
        seterror("fpass", "");
    }
    var cPassword = document.forms['myForm']["fcpass"].value;
    if (cPassword != Password) {
        seterror("fcpass", "Password mismatch!");
        returnVal = false;
    }
    else {
        seterror("fcpass", "");
    }
    return returnVal;
}
