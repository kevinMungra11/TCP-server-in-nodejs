## How the Server Works

1. **Server Binding**: The server binds to a specific IP and port, enabling it to listen for incoming connections.
2. **Client Connections**: When a client connects, a connection socket is created, facilitating communication between the server and that client.
3. **Data Handling**: The server listens for data events on each connection socket, handles the received data, and sends responses to the client as needed.

## Key Concepts

- **Listening Socket**: A socket bound to an IP and port, which accepts incoming connections but does not manage data transmission.
- **Connection Socket**: A dedicated socket for each client connection, allowing for data exchange. This enables the server to handle multiple clients simultaneously.
- **File Descriptor (FD)**: Each socket (server or client) is assigned a unique file descriptor. The operating system uses this integer to track open sockets and resources internally.
