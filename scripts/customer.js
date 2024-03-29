let ticketQueue = []; // Array to store ticket numbers
let servingNumber = "-"; // Variable to store the currently serving ticket number
let lastServedNumber = "-"; // Variable to store the last served ticket number

// Function to take a ticket
function takeNumber() {
    ticketQueue.push(ticketQueue.length + 1); // Add ticket number to the end of the queue

    // Update ticket number display
    document.getElementById("lastNumber").textContent = ticketQueue[ticketQueue.length - 1];
}

// Function to update the now serving number
function updateNowServing(number) {
    document.getElementById("nowServing").textContent = number;
}

// Function to call next ticket at a counter
function callNext(counterId) {
    if (ticketQueue.length > 0) {
        servingNumber = ticketQueue.shift(); // Get and remove the first ticket from the queue
        updateNowServing(servingNumber); // Update now serving display
        document.getElementById(`counter${counterId}Num`).textContent = servingNumber; // Update counter number
    }
}
