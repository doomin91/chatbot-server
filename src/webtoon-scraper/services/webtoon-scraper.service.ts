import { Injectable } from '@nestjs/common';
import { ExportScraperService } from 'src/scraper/services/export-scraper.service';
import _ from 'lodash';
@Injectable()
export class WebtoonScraperService {
  constructor(private exportScraperService: ExportScraperService) {}

  async getWebtoonInfo() {
    const result = [];

    const url =
      'https://comic.naver.com/api/webtoon/titlelist/weekday?order=user';
    const contents = await this.exportScraperService.getContents(url);
    if (!_.isNil(contents.titleListMap)) {
      const days = Object.keys(contents.titleListMap);

      for (const day of days) {
        console.log(`${day} 스크래핑 중`);
        for (const webtoonItem of contents.titleListMap[day]) {
          const { titleId } = webtoonItem;
          const url2 = `https://comic.naver.com/api/article/list/info?titleId=${titleId}`;
          const webtoonDetail = await this.exportScraperService.getContents(
            url2,
          );
          result.push(webtoonDetail);
        }
      }
    }
    return result;
  }

  async getFinalWebtoonInfo() {
    const result = [];

    for (let i = 1; i <= 45; i++) {
      const url = `https://comic.naver.com/api/webtoon/titlelist/finished?page=${i}&order=UPDATE`;
      const contents = await this.exportScraperService.getContents(url);
      if (!_.isNil(contents.titleList)) {
        for (const webtoonItem of contents.titleList) {
          const { titleId } = webtoonItem;
          const url2 = `https://comic.naver.com/api/article/list/info?titleId=${titleId}`;
          const webtoonDetail = await this.exportScraperService.getContents(
            url2,
          );
          result.push(webtoonDetail);
        }
      }
    }
    return result;
  }
}
