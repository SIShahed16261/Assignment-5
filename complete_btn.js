

function updateTask(buttonId) {

    const task = document.getElementById("Task").innerText;
    const convertedTask = parseInt(task);
    const newTaskvalue = convertedTask - 1;
    document.getElementById("Task").innerText = newTaskvalue;

    const addition = document.getElementById("adding").innerText;
    const convertedAdd = parseInt(addition);
    const newaddedValue = convertedAdd + 1;
    document.getElementById("adding").innerText = newaddedValue;

    const button = document.getElementById(buttonId);
    button.disabled = true;
    alert('Congratulations! You have completed the task.');
}


document.getElementById("complete1").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
});
document.getElementById("complete2").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
});
document.getElementById("complete3").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
});
document.getElementById("complete4").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
});
document.getElementById("complete5").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
});
document.getElementById("complete6").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
});

