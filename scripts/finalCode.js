var inp_as = document.getElementById('a_size'),
    array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

var butts_algos = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

// Array generation and updation.

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

// Running the appropriate algorithm.
for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;
    }
}

function enable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_unselected");

        butts_algos[i].disabled = false;
        inp_as.disabled = false;
        inp_gen.disabled = false;
        inp_aspeed.disabled = false;
    }
}

function runalgo() {
    disable_buttons();

    this.classList.add("butt_selected");
    var algorithmName = this.innerHTML;
    var startTime, endTime, totalTime;

    switch (algorithmName) {
        case "Bubble":
            startTime = performance.now();
            Bubble(() => {
                endTime = performance.now();
                totalTime = endTime - startTime;
                document.getElementById("runningTime").innerText = "Bubble Sort Time: " + totalTime.toFixed(2) + " milliseconds";
                enable_buttons();
                clearRunningTime();
            });
            break;
        case "Selection":
            startTime = performance.now();
            Selection_sort(() => {
                endTime = performance.now();
                totalTime = endTime - startTime;
                document.getElementById("runningTime").innerText = "Selection Sort Time: " + totalTime.toFixed(2) + " milliseconds";
                enable_buttons();
                clearRunningTime();
            });
            break;
        case "Insertion":
            startTime = performance.now();
            Insertion(() => {
                endTime = performance.now();
                totalTime = endTime - startTime;
                document.getElementById("runningTime").innerText = "Insertion Sort Time: " + totalTime.toFixed(2) + " milliseconds";
                enable_buttons();
                clearRunningTime();
            });
            break;
        case "Merge":
            startTime = performance.now();
            Merge(() => {
                endTime = performance.now();
                totalTime = endTime - startTime;
                document.getElementById("runningTime").innerText = "Merge Sort Time: " + totalTime.toFixed(2) + " milliseconds";
                enable_buttons();
                clearRunningTime();
            });
            break;
        case "Quick":
            startTime = performance.now();
            Quick(() => {
                endTime = performance.now();
                totalTime = endTime - startTime;
                document.getElementById("runningTime").innerText = "Quick Sort Time: " + totalTime.toFixed(2) + " milliseconds";
                enable_buttons();
                clearRunningTime();
            });
            break;
        case "Heap":
            startTime = performance.now();
            Heap(() => {
                endTime = performance.now();
                totalTime = endTime - startTime;
                document.getElementById("runningTime").innerText = "Heap Sort Time: " + totalTime.toFixed(2) + " milliseconds";
                enable_buttons();
                clearRunningTime();
            });
            break;
    }
}

function clearRunningTime() {
    // Clear the running time after a delay (adjust the delay as needed)
    setTimeout(() => {
        document.getElementById("runningTime").innerText = "";
    }, 3000);  // Display running time for 3 seconds, adjust as needed
}