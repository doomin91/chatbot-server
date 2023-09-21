import { TwitchChatbotService } from '../services/twtich-chatbot.service';
import { Injectable } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class TwitchChatbotGateway {
  client;
  constructor(private twtichChatbotService: TwitchChatbotService) {}

  afterInit() {
    this.client = this.twtichChatbotService.connect();

    this.client.on('connected', (addr, port) => {
      console.log(`* Connected to ${addr}:${port}`);
    });

    this.client.on('message', (target, context, msg, self) => {
      if (self) {
        return;
      } // Ignore messages from the bot

      const commandName = msg.trim();
      this.onMessageHandler(target, context, commandName);
    });
  }

  onMessageHandler(target, context, commandName) {
    // If the command is known, let's execute it

    switch (commandName) {
      case '!헬기':
        const num = this.rollDice();
        this.client.say(target, `You rolled a ${num}`);
        break;
      default:
        this.client.say(target, `You typed ${commandName}`);
    }
  }

  rollDice() {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
  }
}
