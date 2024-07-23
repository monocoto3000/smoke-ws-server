"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketService = void 0;
class WebSocketService {
    constructor(io) {
        this.io = io;
        this.packetBuffer = [];
        this.isProcessing = false;
        this.handleConnection = (socket) => {
            console.log('WebSocket client connected');
            socket.on('userId', (userId) => {
                console.log(`Received userId: ${userId}`);
                if (userId) {
                    socket.join(userId);
                    console.log(`User ${socket.id} joined room ${userId}`);
                }
            });
            socket.on('data', (data) => {
                this.enqueuePacket({ event: 'data', data });
                this.processNextPacket();
            });
        };
        this.io.on('connection', this.handleConnection);
    }
    enqueuePacket(packet) {
        this.packetBuffer.push(packet);
    }
    processNextPacket() {
        if (this.packetBuffer.length > 0 && !this.isProcessing) {
            this.isProcessing = true;
            const packet = this.packetBuffer.shift();
            this.handlePacket(packet);
        }
    }
    handlePacket(packet) {
        const { event, data } = packet;
        console.log(`Processing ${event} with data:`, data);
        if (data.id) {
            this.io.to(data.id).emit(event, data);
        }
        else {
            console.log("Error finding users to send data");
        }
        this.isProcessing = false;
        this.processNextPacket();
    }
}
exports.WebSocketService = WebSocketService;
