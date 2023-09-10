import { Module } from '@nestjs/common';
import { ScraperModule } from 'src/scraper/scraper.module';
import { WebtoonScraperController } from './controllers/webtoon-scraper.controller';
import { WebtoonScraperService } from './services/webtoon-scraper.service';

@Module({
  imports: [ScraperModule],
  controllers: [WebtoonScraperController],
  providers: [WebtoonScraperService],
  exports: [],
})
export class WebtoonScraperModule {}
