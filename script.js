// selecting add popup add overlay button

var popupoverlay=document.querySelector(".popup-overlay")
var addpopup=document.querySelector(".add-popup")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    addpopup.style.display="block"
})

 // selecting cancel popup

 var cancelpopup=document.getElementById("cancel-popup")

 cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
    addpopup.style.display="none"
 })

 // selecting continer,add-day,day-input,date-input,day-discription

 var continer=document.querySelector(".continer")
 var addday=document.getElementById("add-day")
 var daysetinput=document.getElementById("day-input")
 var dateinput=document.getElementById("date-input")
 var daydiscription=document.getElementById("day-discription")

 addday.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","mind-continer")
    div.innerHTML=`<h2>${daysetinput.value}</h2>
    <h5>${dateinput.value}</h5>
    <p>${daydiscription.value} </p>
    <button onclick="deletemind(event)">delete</button>`
    continer.append(div)
    popupoverlay.style.display="none"
    addpopup.style.display="none"

 })

function deletemind(event)
{
    event.target.parentElement.remove()
}


