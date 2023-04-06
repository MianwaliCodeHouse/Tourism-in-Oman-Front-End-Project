if(localStorage.getItem("post2comments")==null){
    localStorage.setItem("post2comments","")
}

function addcommit(){
if (localStorage.getItem("loginStatus")==="true") {
    if(commentmsg.value){
    emailID=localStorage.getItem("useremail")
    user=commentmsg.value+"#$"+emailID
    comment=localStorage.getItem("post2comments")+user+",,,"
    localStorage.setItem("post2comments",comment)
    location.reload()
}else{
    alert("Msg should not be empty")
}
}else{
    alert("Please Login First to write comment...")
}
}
comments=localStorage.getItem("post2comments");
comments=comments.split(",,,");
console.log(comments)
for (let index = 0; index < comments.length-1; index++) {
    data=comments[index];
    dataArray=data.split("#$");
    msg=dataArray[0];
    useremail=dataArray[1];
    commentsection.innerHTML+=`<div class="comment"><p>${useremail}</p><p class="msg">${msg}</p></div>`;
    
}