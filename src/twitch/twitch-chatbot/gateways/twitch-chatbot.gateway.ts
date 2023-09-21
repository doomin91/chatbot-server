import { TwitchChatbotService } from '../services/twtich-chatbot.service';
import { Injectable } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class TwitchChatbotGateway {
  client;
  constructor(private twtichChatbotService: TwitchChatbotService) {}

  afterInit() {
    this.client = this.twtichChatbotService.connect();
    this.client.on('message', this.onMessageHandler);
    this.client.on('connected', this.onConnectedHandler);
  }

  onMessageHandler(target, context, msg, self) {
    console.log(typeof this.client);

    if (self) {
      return;
    } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim();

    // If the command is known, let's execute it
    if (commandName === '!dice') {
      const num = this.rollDice;
      this.client.say(target, `You rolled a ${num}`);
      console.log(`* Executed ${commandName} command`);
    } else {
      console.log(`* Unknown command ${commandName}`);
    }
  }

  rollDice() {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
  }

  onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
  }
}
