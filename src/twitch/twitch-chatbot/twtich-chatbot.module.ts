import { Module } from '@nestjs/common';
import { TwitchChatbotService } from './services/twtich-chatbot.service';
import { TwitchChatbotGateway } from './gateways/twitch-chatbot.gateway';
import { TwitchAuthModule } from '../twitch-auth/twitch-auth.module';

@Module({
  imports: [TwitchAuthModule],
  providers: [TwitchChatbotService, TwitchChatbotGateway],
})
export class TwitchChatbotModule {}
