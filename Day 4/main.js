// For button  1 we can directly  make function and all it
function handelClick(){
    alert("You have clicked the button")
}

// For button 2 we can get it by ID and use eventlistner onclick and shoot the function handelClick
document.getElementById("clickme").onclick = handelClick;


// Recommended way: Here For button 3 we get by id and addeda eventlistner click and called function handelClick

document.getElementById("clickbtn").addEventListener("click", handelClick);



// ********************* ADD & Remove EventListner ************************

function handelMouseOver(event){
    console.log(event)
}


//Event object : contains information about the event 
//Add

document.getElementById("start").addEventListener("click", function handleClick(){
    document.addEventListener("mouseover", handelMouseOver);
})

//Remove

document.getElementById("stop").removeEventListener("click",function handelClick(){
    document.removeEventListener("mouseover", handelMouseOver);
})