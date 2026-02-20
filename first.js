const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const resetButton = document.getElementById("reset");
redButton.addEventListener("click", ()=>{
    document.body.style.backgroundColor ="red";
});
blueButton.addEventListener("click", ()=>{
    document.body.style.backgroundColor ="blue";
});
resetButton.addEventListener("click", ()=>{
    document.body.style.backgroundColor ="white";
});
