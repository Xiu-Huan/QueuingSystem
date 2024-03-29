// server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Queue data (for demonstration)
let ticketNumber = 1;
let nowServing = "-";
let countersOnline = false;

// Middleware to handle JSON requests
app.use(express.json());

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A client connected');

    // Send initial ticket data to client
    socket.emit('initialData', { ticketNumber, nowServing, countersOnline });

    // Handle ticket request
    socket.on('takeTicket', () => {
        // Increment ticket number and broadcast to all clients
        ticketNumber++;
        io.emit('ticketUpdated', { ticketNumber });
    });

    // Handle counter status change
    socket.on('toggleCounterStatus', () => {
        // Toggle counter status and broadcast to all clients
        countersOnline = !countersOnline;
        io.emit('counterStatusUpdated', { countersOnline });
    });

    // Handle complete current ticket
    socket.on('completeCurrentTicket', () => {
        // Mark current ticket as complete and broadcast to all clients
        nowServing = "-";
        io.emit('nowServingUpdated', { nowServing });
    });

    // Handle calling next ticket
    socket.on('callNextTicket', () => {
        // Update now serving ticket and broadcast to all clients
        nowServing = ticketNumber;
        ticketNumber++;
        io.emit('nowServingUpdated', { nowServing });
    });

    // Disconnect event
    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
