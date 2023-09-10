import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Webtoon } from '../entities/webtoon.entity';
import { WebtoonDto } from '../dtos/webtoon.dto';
import { GenerateWebtoonDto } from '../dtos/generate-webtoon.dto';

@Injectable()
export class WebtoonRepository {
  constructor(
    @InjectRepository(Webtoon)
    private repository: Repository<Webtoon>,
  ) {}

  async findWebtoons(): Promise<{ list: WebtoonDto[]; count: number }> {
    const qurey = this.repository.createQueryBuilder('w');

    const list = await qurey.getMany();
    const count = await qurey.getCount();

    return { list, count };
  }

  async findWebtoonById(id: number) {
    const webtoon = await this.repository.findOne({
      where: {
        id: id,
      },
    });

    return webtoon;
  }

  async insertWebtoons(generateWebtoonDto: GenerateWebtoonDto) {
    await this.repository.save(generateWebtoonDto);
  }
}
