import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WebtoonNaver } from '../entities/webtoon-naver.entity';
import { GenerateWebtoonNaverDto } from '../dtos/generate-webtoon-naver.dto';

@Injectable()
export class WebtoonNaverRepository {
  constructor(
    @InjectRepository(WebtoonNaver)
    private repository: Repository<WebtoonNaver>,
  ) {}

  async insertWebtoonNavers(generateNaverWebtoonDto: GenerateWebtoonNaverDto) {
    await this.repository.save(generateNaverWebtoonDto);
  }

  async findAdminNaverWebtoons() {
    const qurey = this.repository.createQueryBuilder('wn');

    const list = await qurey.getMany();
    const count = await qurey.getCount();

    return { list, count };
  }
}
