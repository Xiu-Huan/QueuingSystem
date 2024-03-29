// Function to toggle the status of a counter
function toggleStatus(counterId) {
    const statusSpan = document.getElementById(`counter${counterId}Status`);

    if (statusSpan.textContent === "Offline") {
        statusSpan.textContent = "Online";
        statusSpan.classList.add("online");
    } else {
        statusSpan.textContent = "Offline";
        statusSpan.classList.remove("online");
    }
}

// Function to mark the current ticket being served as complete
function completeCurrent(counterId) {
    document.getElementById(`counter${counterId}Num`).textContent = "-";
}

// Function to update the current number for all counters
function updateCounterNumbers(number) {
    document.getElementById("counter1Num").textContent = number;
    document.getElementById("counter2Num").textContent = number;
    document.getElementById("counter3Num").textContent = number;
    document.getElementById("counter4Num").textContent = number;
}