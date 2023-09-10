import { Injectable } from '@nestjs/common';
import { ExportScraperService } from 'src/scraper/services/export-scraper.service';

@Injectable()
export class WebtoonScraperService {
  constructor(private exportScraperService: ExportScraperService) {}

  async getWebtoonInfo() {
    const url = 'https://comic.naver.com/webtoon';
    const contents = await this.exportScraperService.getContents(url);
    // console.log(contents);

    // return contents;
  }
}
