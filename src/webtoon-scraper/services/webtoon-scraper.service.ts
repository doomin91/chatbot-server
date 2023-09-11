import { Injectable } from '@nestjs/common';
import { ExportScraperService } from 'src/scraper/services/export-scraper.service';
import * as cheerio from 'cheerio';

@Injectable()
export class WebtoonScraperService {
  constructor(private exportScraperService: ExportScraperService) {}

  async getWebtoonInfo() {
    const url = 'https://www.naver.com/';
    const contents = await this.exportScraperService.getContents(url);

    const $ = cheerio.load(contents);
    const $bodyList = $(
      '#shortcutArea > ul > li > a > span.service_name',
    ).text();

    console.log($bodyList);
    // $bodyList.each((i, el) => {
    //   console.log($(el).find('h3').text());
    // });
    // console.log(contents);

    // return contents;
  }
}
