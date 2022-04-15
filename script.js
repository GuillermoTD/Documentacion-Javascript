const Sidebar = document.querySelector(".Sidebar")
const Toggle_Btn = document.querySelector(".navbar_active")
const Link_Clicked = document.getElementsByClassName("nav-link")
const Close_Btn = document.querySelector(".navbar_close")

Toggle_Btn.addEventListener("click",()=>{
    Sidebar.classList.toggle("Sidebar_Active")
});
Close_Btn.addEventListener("click",()=>{
    Sidebar.classList.remove("Sidebar_Active")
})


Link_Clicked.addEventListener("click",function(){
    console.log("hola")
})
  
