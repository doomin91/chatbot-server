import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminWebtoonController } from './controllers/admin-webtoon.controller';
import { WebtoonRepository } from './repositories/webtoon.repository';
import { AdminWebtoonService } from './services/admin-webtoon.service';
import { Webtoon } from './entities/webtoon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Webtoon])],
  controllers: [AdminWebtoonController],
  providers: [AdminWebtoonService, WebtoonRepository],
})
export class WebtoonModule {}
