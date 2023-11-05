import { Body, Controller, Post } from '@nestjs/common';
import { KakaoChatBotService } from './kakao-chatbot.service';
import { KakaoChatBotDto } from './dtos/kakao-chatbot.dto';

@Controller('kakao-chatbot')
export class KakaoChatBotController {
  constructor(private kakaoChatBotService: KakaoChatBotService) {}
  @Post('survey')
  async survey(@Body() kakaoChatBotDto: KakaoChatBotDto) {
    try {
      return await this.kakaoChatBotService.survey(kakaoChatBotDto);
    } catch (e) {
      return { errorMessage: '뭔가 잘못됐어' };
    }
  }
}
