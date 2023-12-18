function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwird2 = document.getElementById("password2").value;

    document.getElementById("name-error").innerHTML="";
    document.getElementById("email-error").innerHTML="";
    document.getElementById("password-error").innerHTML="";
    document.getElementById("password2-error").innerHTML="";

    let isValid = true;

    if(usename == "") {
        document.getElementById("name-error").innerHTML="Ten kh dc de trong";
        isValid=false;
    }
    if(email == "") {
        document.getElementById("email-error").innerHTML="Emial kh dc de trong";
        isValid=false;
    }
    if(password == "") {
        document.getElementById("password-error").innerHTML="Mat khau kh dc de trong";
        isValid=false;
    }
    if(password2 == "") {
        document.getElementById("password2-error").innerHTML="Mat khau kh khop";
        isValid=false;
    }

    return isValid;

}