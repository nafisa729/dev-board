document.getElementById("chng-btn").addEventListener("click", function(event){
event.preventDefault();

const colors = ["#e7e6e6", "#d6dce5", "#dae3f3", "#fdf2ea", "#ededed", "#fff8e5", "#eef5fb", "#f0f7ec"];
document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})