import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'http';

@WebSocketGateway()
export class TwitchChatbotGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    if (message === 'JOIN') {
      this.server.emit('어서와용');
    } else {
      this.server.emit('message', message);
    }
  }

  @SubscribeMessage('JOIN')
  handleJoin(): void {
    this.server.emit('어서와!');
  }
}
