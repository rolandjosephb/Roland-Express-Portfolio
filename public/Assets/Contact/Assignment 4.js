$( document ).ready(function() {
        
});

  
var myPassword = document.getElementById("Password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var confirmation = document.getElementById("Confirm");




// When the user starts to type something inside the password field
myPassword.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myPassword.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myPassword.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myPassword.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    
    if (myPassword.value.length != 6) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    //validate password
    if (myPassword != confirmation) {
        document.getElementById("Confirm").innerHTML = "**Passwords are not same";
        return false;
    } else {
        document.getElementById("Confirm").innerHTML = "**Passwords are not same";
    }
   
    
}
//var pw1 = document.getElementById("Password").value;
//var pw2 = document.getElementById("Confirm").value;
//confirmation.onkeyup = function () {
//    if (pw1 != pw2) {
//        document.getElementById("Confirm").innerHTML = "**Passwords are not same";
//        return false;
//    } else {
//        alert("Your password created successfully");
//        document.write("JavaScript form has been submitted successfully");
//    }








