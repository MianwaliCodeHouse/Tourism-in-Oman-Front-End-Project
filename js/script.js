const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close');

if(bar)
{
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

close.addEventListener('click', ()=>{
    nav.classList.remove('active');
})

function logout(){
    localStorage.setItem("loginStatus",false)
    localStorage.setItem("useremail","")
    location.href="index.html"
}

if (localStorage.getItem("loginStatus")==='true') {
    statusbtn.innerHTML=`<a onclick="logout()">Logout</a>`
}
setTimeout(() => {
    loadersection.style.display="none"
}, 1000);
setTimeout(() => {
    loadersection.style.opacity=0
}, 500);
