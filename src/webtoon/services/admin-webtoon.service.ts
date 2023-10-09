import { Injectable } from '@nestjs/common';
import { WebtoonRepository } from '../repositories/webtoon.repository';
import { GenerateWebtoonDto } from '../dtos/generate-webtoon.dto';
import * as constants from '../webtoon.constants';
import { CustomExceptionBuilder } from 'src/logger/custom-exception';
import { WebtoonNaverRepository } from '../repositories/webtoon-naver.repository';
import { GenerateWebtoonNaverDto } from '../dtos/generate-webtoon-naver.dto';
import { WebtoonScraperService } from 'src/webtoon-scraper/services/webtoon-scraper.service';
import { WebtoonNaverDto } from '../dtos/webtoon-naver.dto';
const ceb = new CustomExceptionBuilder(constants);

@Injectable()
export class AdminWebtoonService {
  constructor(
    private webtoonRepository: WebtoonRepository,
    private webtoonNaverRepository: WebtoonNaverRepository,
    private webtoonScraperService: WebtoonScraperService,
  ) {}

  async findAdminWebtoons() {
    return await this.webtoonRepository.findWebtoons();
  }

  async insertWebtoons(generateWebtoonDto: GenerateWebtoonDto) {
    await this.webtoonRepository.insertWebtoons(generateWebtoonDto);
  }

  async insertWebtoonNavers(generateWebtoonNaverDto: GenerateWebtoonNaverDto) {
    await this.webtoonNaverRepository.insertWebtoonNavers(
      generateWebtoonNaverDto,
    );
  }

  async crollingNaverWebtoons() {
    const webtoons = await this.webtoonScraperService.getWebtoonInfo();

    for (const webtoon of webtoons) {
      let webtoonNaverDto = new WebtoonNaverDto();

      const curationTagList = [];

      for (const tag of webtoon['curationTagList']) {
        curationTagList.push(tag['tagName']);
      }
      webtoon['curationTagList'] = curationTagList;

      webtoonNaverDto = webtoon;
      await this.webtoonNaverRepository.insertWebtoonNavers(webtoonNaverDto);
    }
  }

  async crollingNaverFinalWebtoons() {
    const webtoons = await this.webtoonScraperService.getFinalWebtoonInfo();

    for (const webtoon of webtoons) {
      let webtoonNaverDto = new WebtoonNaverDto();

      const curationTagList = [];
      for (const tag of webtoon['curationTagList']) {
        curationTagList.push(tag['tagName']);
      }
      webtoon['curationTagList'] = curationTagList;

      const communityArtists = [];
      for (const artist of webtoon['communityArtists']) {
        communityArtists.push(artist['name']);
      }
      webtoon['communityArtists'] = communityArtists;

      webtoonNaverDto = webtoon;
      await this.webtoonNaverRepository.insertWebtoonNavers(webtoonNaverDto);
    }
  }

  async findAdminNaverWebtoons() {
    return await this.webtoonNaverRepository.findAdminNaverWebtoons();
  }
}
