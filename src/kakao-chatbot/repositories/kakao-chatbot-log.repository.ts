import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KakaoChatBotLog } from '../entities/kakao-chatbot-log.entity';
import { GenerateKakaoChatBotLogDto } from '../dtos/generate-kakao-chatbot-log.dto';

@Injectable()
export class KakaoChatBotLogRepository {
  constructor(
    @InjectRepository(KakaoChatBotLog)
    private repository: Repository<KakaoChatBotLog>,
  ) {}

  async insertKakaoChatBotLog(
    generateKakaoChatBotLogDto: GenerateKakaoChatBotLogDto,
  ) {
    await this.repository.save(generateKakaoChatBotLogDto);
  }
}
