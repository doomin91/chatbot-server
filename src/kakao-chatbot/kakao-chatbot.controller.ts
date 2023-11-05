import { Body, Controller, Post } from '@nestjs/common';
import { KakaoChatBotService } from './kakao-chatbot.service';
import { KakaoChatBotDto } from './dtos/kakao-chatbot.dto';

@Controller('kakao-chatbot')
export class KakaoChatBotController {
  constructor(private kakaoChatBotService: KakaoChatBotService) {}
  @Post('survey')
  async survey(@Body() kakaoChatBotDto: KakaoChatBotDto) {
    return await this.kakaoChatBotService.survey(kakaoChatBotDto);
  }
}
