const addTask = document.getElementById('add-task');
const countTask = document.getElementById('count-task');

const cards = document.querySelectorAll(".card-section")
for (let card of cards) {
    const btn = card.querySelector(".task-btn")

    btn.addEventListener("click", function (event) {
        alert("Board Updated Successfully");

        btn.classList.remove("btn-active");
        btn.classList.add("btn-disabled");

        addTask.innerHTML = parseInt(addTask.innerText) + 1;

        countTask.innerHTML = parseInt(countTask.innerText) - 1;

        if (countTask.innerHTML === "0") {
            alert("Congratulations! You have completed all the task")
        }

        const paragraph = document.createElement("p")
        const title = card.querySelector(".card-tag").innerText
        let date = new Date();
        const time = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });

        paragraph.innerText = `You have Complete the task ${title} at ${time}`

        paragraph.classList.add("bg-[#F4F7FF]", "p-4", "m-4", "rounded-2xl");

        const history = document.getElementById("history")

        history.append(paragraph);
    })

}

document.getElementById("history-btn").addEventListener("click", function () {
    const history = document.getElementById("history")
    history.innerHTML = ""
})