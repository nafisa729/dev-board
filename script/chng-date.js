
function currentDate() {
    const date = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    const [dayName, day, month, year] = formattedDate.split(" ");
    
    document.getElementById("day-name").textContent = `${dayName},`;
    document.getElementById("full-date").textContent = `${day} ${month}, ${year}`;
}

currentDate();