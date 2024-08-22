// let headTag = document.head;
// let bodyTag = document.body;
// let havola = document.documentURI;
// let formalar = document.forms;
// let rasmlar = document.images;
// let havolalar = document.links;
// console.log(havolalar);

// Events in JS: onclick

// function buttonniBos(){
//     alert("siz buttonni bosdingiz!");
// }
// function buttonniIkkiBos(){
//     alert("siz buttonni 2 marta bosdingiz!");
// }
// function tanlash(event){
//     alert("siz " + event.target.value + " mashinasini tanladingiz");
// }
// function inputgabosish(){
//     console.log("Inputga bosildi!");
// }
// function inoutdanChiqish(){
//     console.log("inputdan chiqildi")
// }
// function yozish(event){
//     console.log(event.target.value)
// }
// document.querySelector("text").addEventListener("copy",function(event){
//     console.log("Diqqat! Diqqat!" + event.target.value + "nomli xujjat ko`chirilyapti!")
// });
function harakatlanish(e){
    console.log(e.clientX,e.clientY);
}
function kirish(){
    console.log("Hududga kirildi!");
}
function chiqish(){
    console.log("Hududdan chiqildi!");
}