import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { KakaoRequestDto } from '../dtos/kakao-skill-request-dto';

@Controller('webtoons')
@ApiTags('웹툰')
export class WebtoonController {
  @Post('test')
  async webtoonTest(req: KakaoRequestDto, res: Response) {
    return JSON.stringify(req);
  }
}
