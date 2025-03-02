document.getElementById("chng-btn").addEventListener("click", function(event){
event.preventDefault();

const colors = ["#ffb2b2", "#ffc1db", "#ffcad6", "#ffdecd", "#ffe8c8", "#fff1c4", "#dbedc7", "#b6e0d5", "#b5e3f7", "#9ccbeb", "#c0a9c8", "#d5aacb", "#f4f7ff"];
document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})