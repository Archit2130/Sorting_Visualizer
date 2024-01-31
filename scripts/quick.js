function Quick() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";

    c_delay = 0;

    var startTime = performance.now();

    quick_sort(0, array_size - 1);

    var endTime = performance.now();
    var totalTime = endTime - startTime;

    document.getElementById("runningTimeElement").innerText = "Quick Sort Time: " + totalTime.toFixed(2) + " milliseconds";

    enable_buttons();
}

function quick_sort(start, end) {
    if (start < end) {
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1);
        quick_sort(piv_pos + 1, end);
    }
    // Here you can handle the running time display and enabling buttons if needed.
    // You might also want to update the visualization here.
}