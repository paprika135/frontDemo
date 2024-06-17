const wz = document.querySelector("div.wz");
Array(3).fill(null).forEach(()=>{
    wz.insertAdjacentHTML("beforeend",'<div></div>')
})

wz.addEventListener("click",(event)=>{
    event.target.classList.toggle("toggle");
})