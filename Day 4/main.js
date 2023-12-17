function handelClick()
{
    alert("You have clicked button");
}
// second way to event listner
document.getElementById("clickme").onclick = handelClick;


//recomended way
document.getElementById("clickme").addEventListener("click", handelClick)



// Add of th eventlistner
document.getElementById("start").addEventListener("click", function handelClick(){

    document.addEventListener("mouseover", function handelClick(event){
        console.log(event)
    })
})



// Remove of the Event Listner 
document.getElementById("stop").addEventListener("click",  function handelClick(){
   document.removeEventListener("mouseover", function handelClick(event){
    console.log(event)
   })
})
