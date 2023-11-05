import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { KakaoRequestBodyDto } from '../dtos/kakao-skill-request-dto';
import { Request, Response } from 'express';

@Controller('webtoons')
@ApiTags('웹툰')
export class WebtoonController {
  @Post('test')
  async webtoonTest(
    @Req() req: Request,
    @Res() res: Response,
    // @Body() kakaoRequestBodyDto: KakaoRequestBodyDto,
  ) {
    try {
      res.json(req.body);
    } catch (e) {
      return { errorMessage: e };
    }
  }
}
