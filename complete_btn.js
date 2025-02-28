document.getElementById("complete").addEventListener("click", function (event) {
    event.preventDefault();
    const task = document.getElementById("Task").innerText;
    const convertedTask = parseInt(task);
    const newTaskvalue = convertedTask - 1;
    document.getElementById("Task").innerText = newTaskvalue;

    const addition = document.getElementById("adding").innerText;
    const convertedAdd = parseInt(addition);
    const newaddedValue = convertedAdd+1;
    document.getElementById("adding").innerText = newaddedValue;

    const button = document.getElementById("complete");
    button.disabled = true;

})
