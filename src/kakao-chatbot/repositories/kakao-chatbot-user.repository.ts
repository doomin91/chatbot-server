import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KakaoChatBotLog } from '../entities/kakao-chatbot-log.entity';
import { KakaoChatBotUser } from '../entities/kakao-chatbot-user.entity';
import { GenerateKakaoChatBotUserDto } from '../dtos/generate-kakao-chatbot-user.dto';

@Injectable()
export class KakaoChatBotUserRepository {
  constructor(
    @InjectRepository(KakaoChatBotUser)
    private repository: Repository<KakaoChatBotUser>,
  ) {}
  async findKakaoChatBotUserByUserId(userId: string) {
    return await this.repository.findOne({
      where: {
        userId: userId,
      },
    });
  }

  async insertKakaoChatBotUser(
    generateKakaoChatBotUserDto: GenerateKakaoChatBotUserDto,
  ) {
    await this.repository.save(generateKakaoChatBotUserDto);
  }
}
