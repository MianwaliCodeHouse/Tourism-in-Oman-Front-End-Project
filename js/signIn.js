
function signIn() {
    check = false;
    emailid = email.value;
    console.log("run")
    for (let index = 0; index < localStorage.length; index++) {
        if (data = localStorage.getItem(emailid)) {
            arr=data.split(",");
            if(password.value===arr[1]){
                check = true;
            }  
        }
    }
    if (check) {
        localStorage.setItem("loginStatus",true);
        localStorage.setItem("useremail",emailid);
        alert("You are successfully Login... :)")
        location.href="index.html"
    }else{
        alert("You Entered the wrong data. Please fill the correct data and then try again!...:)")
        location.reload()
    }
}