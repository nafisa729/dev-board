function currentDate() {
    const date = new Date();
    
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();

    document.getElementById("day-name").textContent = `${dayName},`;
    document.getElementById("full-date").textContent = `${month} ${day}, ${year}`;
}

currentDate();
