import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KakaoChatBotLog } from '../entities/kakao-chatbot-log.entity';
import { KakaoChatBotUser } from '../entities/kakao-chatbot-user.entity';

@Injectable()
export class KakaoChatBotUserRepository {
  constructor(
    @InjectRepository(KakaoChatBotUser)
    private repository: Repository<KakaoChatBotUser>,
  ) {}
}
