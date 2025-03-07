
const now = new Date();
const options = { weekday: "short", month: "long", day: "numeric", year: "numeric" };
const fullDate = now.toLocaleDateString("en-US", options);
document.getElementById("date-time").innerText = ` ${fullDate} `;



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
    alert('Board updated succesfully');

    if(newTaskvalue===0){
    alert('Congratulations!!! You have completed all the tasks.');
        
    }
}


document.getElementById("complete1").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
    logHistory("title1");
});
document.getElementById("complete2").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
    logHistory("title2");

});
document.getElementById("complete3").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
    logHistory("title3");
});
document.getElementById("complete4").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
    logHistory("title4");
});
document.getElementById("complete5").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
    logHistory("title5");
});
document.getElementById("complete6").addEventListener("click", function (event) {
    event.preventDefault();
    updateTask(this.id);
    logHistory("title6");


});

function logHistory(id) {
    const title = document.getElementById(id).innerText;
    const p = document.createElement("p");

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    
    let date = new Date();

let time = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      second : "2-digit"
});


    p.innerText = `You have completed the task ${title} at ${time} `;
    const d = document.createElement("div");
    d.classList.add( "p-2", "bg-slate-200", "rounded-xl", "mb-2");
    d.appendChild(p);
    const log = document.getElementById("log");
    log.appendChild(d);
}


document.getElementById("clearHistory").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("log").innerHTML = " ";
});


document.getElementById("colorButton").addEventListener("click", function (event) {
    event.preventDefault();

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    document.getElementById("body").style.backgroundColor = randomColor;
});

document.getElementById("Discover").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href = "discover.html";
})

