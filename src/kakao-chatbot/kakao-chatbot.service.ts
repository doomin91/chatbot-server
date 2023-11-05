import { Injectable } from '@nestjs/common';
import { KakaoChatBotUserRepository } from './repositories/kakao-chatbot-user.repository';
import { KakaoChatBotLogRepository } from './repositories/kakao-chatbot-log.repository';
import { Request } from 'express';
import { GenerateKakaoChatBotLogDto } from './dtos/generate-kakao-chatbot-log.dto';
import { KakaoChatBotDto } from './dtos/kakao-chatbot.dto';

@Injectable()
export class KakaoChatBotService {
  constructor(
    private kakaoChatBotUserRepository: KakaoChatBotUserRepository,
    private kakaoChatBotLogRepository: KakaoChatBotLogRepository,
  ) {}

  async survey(kakaoChatBotDto: KakaoChatBotDto) {
    const { userRequest } = kakaoChatBotDto;

    const userId = userRequest.user.id;
    const utterance = userRequest.utterance;
    console.log(userId);
    const generateKakaoChatBotLogDto = new GenerateKakaoChatBotLogDto();
    generateKakaoChatBotLogDto.userId = userId;
    generateKakaoChatBotLogDto.utterance = utterance;
    const result = await this.kakaoChatBotLogRepository.insertKakaoChatBotLog(
      generateKakaoChatBotLogDto,
    );

    return result;
  }
}
