import { Controller, Get } from '@nestjs/common';
import { WebtoonScraperService } from '../services/webtoon-scraper.service';
import { ApiDoc } from 'src/common/decorators/swagger/api-doc.decorator';

@Controller('webtoon-scraper')
export class WebtoonScraperController {
  constructor(private webtoonScraperService: WebtoonScraperService) {}

  @ApiDoc({
    summary: '웹툰 항목 추가',
  })
  @Get('')
  async getWebtoonInfo() {
    return await this.webtoonScraperService.getWebtoonInfo();
  }
}
