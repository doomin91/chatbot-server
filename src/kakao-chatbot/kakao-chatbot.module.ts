import { Module } from '@nestjs/common';
import { KakaoChatBotController } from './kakao-chatbot.controller';
import { KakaoChatBotLog } from './entities/kakao-chatbot-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KakaoChatBotService } from './kakao-chatbot.service';
import { KakaoChatBotUser } from './entities/kakao-chatbot-user.entity';
import { KakaoChatBotLogRepository } from './repositories/kakao-chatbot-log.repository';
import { KakaoChatBotUserRepository } from './repositories/kakao-chatbot-user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([KakaoChatBotLog, KakaoChatBotUser])],
  controllers: [KakaoChatBotController],
  providers: [
    KakaoChatBotService,
    KakaoChatBotUserRepository,
    KakaoChatBotLogRepository,
  ],
  exports: [KakaoChatBotService],
})
export class KakaoChatBotModule {}
