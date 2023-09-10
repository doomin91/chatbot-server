import { Injectable } from '@nestjs/common';
import { WebtoonRepository } from '../repositories/webtoon.repository';
import { GenerateWebtoonDto } from '../dtos/generate-webtoon.dto';
import * as constants from '../webtoon.constants';
import { CustomExceptionBuilder } from 'src/logger/custom-exception';
const ceb = new CustomExceptionBuilder(constants);

@Injectable()
export class AdminWebtoonService {
  constructor(private webtoonRepository: WebtoonRepository) {}

  async findAdminWebtoons() {
    return await this.webtoonRepository.findWebtoons();
  }

  async insertWebtoons(generateWebtoonDto: GenerateWebtoonDto) {
    await this.webtoonRepository.insertWebtoons(generateWebtoonDto);
  }

  async updateWebtoonById(id: number) {
    ceb.throwBadRequestException('흥');
  }
}
