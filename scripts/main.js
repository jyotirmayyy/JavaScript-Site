let himImg = document.querySelector("img") ;

himImg.onclick = function() {
    let himSrc = himImg.getAttribute("src");
    if (himSrc === "images/himalayas.jpg")
        {
            himImg.setAttribute("src","images/himalayas-2.jpg");
        }
    else
        {
            himImg.setAttribute("src","images/himalayas.jpg");
        }
}
//-------------------------------------------------------------------------------------
let userButton = document.querySelector("button");
let userHeading = document.querySelector("h1");

//--------------------------------------------------------------------------------------
if(!localStorage.getItem("Name")) {
    setUserName();                                     //because no data-item named "Name" exists, whole process will run (first-time-user)
} 
else {
    let storedName = localStorage.getItem("Name");     //because the data item "Name" exists(previous value) and so the prompt's value 
                                                       //we'll retrive it through a variable
    userHeading.textContent = "Go to the Himalayas' " + storedName + " :)";
}
//-----------------------------------------------------------------------------------------
userButton.onclick = function() {                       //to change user
    setUserName();
}
//-----------------------------------------------------------------------------------------
function setUserName() {
    let myName = prompt("Plese enter your Name :)");
    if (!myName) {                                     //so the entry filling doesn't remains blank.
        setUserName();
    }
    else {
        localStorage.setItem("Name",myName);
        userHeading.textContent = "Go to the Himalayas' " + myName + " :)";
    }
}