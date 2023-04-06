
function signUp() {
    if (username.value != "" && email.value != "" && password.value != "" && cpwd.value != "") {
        let str=email.value;
        let emailstr=str.split("@");
        if(emailstr[1]==="gmail.com"){
        if (cpwd.value === password.value) {
            check=true;
            emailid=email.value;
            for (let index = 0; index < localStorage.length; index++) {
                if(email=localStorage.getItem(emailid)){
                    check=false;
                }
                
            }
            if (check) {
                localStorage.setItem(emailid,[username.value,password.value])
                alert("You are successfully Registered through "+emailid)
                location.reload()
            }else{
                alert("Account Already Exist through "+emailid)
                location.reload()
            }
        } else {
            alert("Passwords fields does not match!")
        }
    }else{
        alert("Invalid Email ! Enter the email that ends with '@gmail.com'")
    }
    } else {
        alert("All fields must be filled and required for SignUp!")
    }
}