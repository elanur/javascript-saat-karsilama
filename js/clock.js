
let myName= document.querySelector("#myName")
let Name=prompt("Adınız Nedir?")
myName.innerHTML=Name;

let gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]




const clock=document.querySelector('.clock');
setInterval(() => {
const date=new Date();
let hour=date.getHours();
let minute=date.getMinutes();
let second=date.getSeconds();
let day=gunler[date.getDay()];
let time=`${hour}:${minute}:${second} ${day}`;
clock.textContent=time;

}, 1000);



