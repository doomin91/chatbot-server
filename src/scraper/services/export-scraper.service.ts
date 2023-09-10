import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class ExportScraperService {
  async getContents(url) {
    try {
      const html = await axios.get(url);

      const $ = cheerio.load(html.data);
      const $bodyList = $(
        'div.WeekdayMainView__daily_all_wrap--UvRFc',
      ).children('div');

      $bodyList.each((i, el) => {
        console.log($(el).find('h3').text());
      });
    } catch (e) {
      throw e;
    }
  }
}
