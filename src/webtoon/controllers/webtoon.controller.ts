import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { KakaoRequestBodyDto } from '../dtos/kakao-skill-request-dto';

@Controller('webtoons')
@ApiTags('웹툰')
export class WebtoonController {
  @Post('test')
  async webtoonTest(
    @Req() req: Request,
    @Res() res: Response,
    @Body() kakaoRequestBodyDto: KakaoRequestBodyDto,
  ) {
    try {
      return kakaoRequestBodyDto;
    } catch (e) {
      return { errorMessage: e };
    }
  }
}
