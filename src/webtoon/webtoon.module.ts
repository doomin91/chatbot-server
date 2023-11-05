import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminWebtoonController } from './controllers/admin-webtoon.controller';
import { WebtoonRepository } from './repositories/webtoon.repository';
import { AdminWebtoonService } from './services/admin-webtoon.service';
import { Webtoon } from './entities/webtoon.entity';
import { WebtoonNaver } from './entities/webtoon-naver.entity';
import { WebtoonNaverRepository } from './repositories/webtoon-naver.repository';
import { WebtoonScraperModule } from 'src/webtoon-scraper/webtoon-scraper.module';
import { AdminWebtoonNaverController } from './controllers/admin-webtoon-naver.controller';
import { WebtoonController } from './controllers/webtoon.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Webtoon, WebtoonNaver]),
    WebtoonScraperModule,
  ],
  controllers: [
    AdminWebtoonController,
    AdminWebtoonNaverController,
    WebtoonController,
  ],
  providers: [AdminWebtoonService, WebtoonRepository, WebtoonNaverRepository],
})
export class WebtoonModule {}
