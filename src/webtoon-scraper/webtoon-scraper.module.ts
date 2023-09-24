import { Module } from '@nestjs/common';
import { ScraperModule } from 'src/scraper/scraper.module';
import { WebtoonScraperService } from './services/webtoon-scraper.service';

@Module({
  imports: [ScraperModule],
  providers: [WebtoonScraperService],
  exports: [WebtoonScraperService],
})
export class WebtoonScraperModule {}
