import { Injectable } from '@nestjs/common';
import { ExportScraperService } from 'src/scraper/services/export-scraper.service';
import * as cheerio from 'cheerio';
import _ from 'lodash';
@Injectable()
export class WebtoonScraperService {
  constructor(private exportScraperService: ExportScraperService) {}

  async getWebtoonInfo() {
    const url =
      'https://comic.naver.com/api/webtoon/titlelist/weekday?order=user';
    const contents = await this.exportScraperService.getContents(url);
    if (!_.isNil(contents.titleListMap)) {
      const days = Object.keys(contents.titleListMap);

      for (const day of days) {
        for (const webtoonItem of contents.titleListMap[day]) {
          const { titleId } = webtoonItem;
          console.log(titleId);
          const url2 = `https://comic.naver.com/api/article/list/info?titleId=${titleId}`;
          const webtoonDetail = await this.exportScraperService.getContents(
            url2,
          );
          console.log(webtoonDetail);
        }
      }
    }
  }
}
