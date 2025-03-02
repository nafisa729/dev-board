document.getElementById("chng-btn").addEventListener("click", function(event){
event.preventDefault();

const colors = ["#ffadad", "#add1eb", "#dcf0c7", "#c7eefc", "#d0bbe0", "#ffd7ac"];
document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})