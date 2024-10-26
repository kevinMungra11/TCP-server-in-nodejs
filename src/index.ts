import * as net from "net";

// Create a listening socket
let server = net.createServer();

// Bind the server to a local IP and port, so it listens for incoming connections.
server.listen({ host: "127.0.0.1", port: 1111 }, () => {
  console.log("Server is listening on 127.0.0.1:1111");
});

// Event listener for new client connections.
// When a client connects, this event is triggered, and a connection socket is created for communication.
server.on("connection", (socket: net.Socket) => {
  // The `socket` here represents a connection socket (with an associated file descriptor).
  // In Node.js, socket handles are wrapped in JavaScript objects with methods.

  // Listen for data events on the connection socket.
  socket.on("data", (data: Buffer) => {
    console.log("Received data:", data.toString());

    // Send a response back to the client.
    socket.write(
      `Connection with IP: ${socket.remoteAddress} and port: ${socket.remotePort} established`
    );

    // If the received data includes the keyword "kevin", close the connection.
    if (data.includes("kevin")) {
      socket.end(); // This sends a FIN packet, signaling the end of transmission.
    }
  });

  // When the client disconnects (sends a FIN), the "end" event is triggered.
  socket.on("end", () => {
    console.log("Client disconnected");
  });

  // Log the client's IP address and port.
  console.log("Client connected from IP:", socket.remoteAddress);
  console.log("Client connected from port:", socket.remotePort);
});

// Listen for server-level errors.
server.on("error", (err: Error) => {
  console.error("Server error:", err);
});
