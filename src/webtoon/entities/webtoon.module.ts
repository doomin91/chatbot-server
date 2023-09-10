import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Webtoon } from './webtoon.entity';
import { AdminWebtoonController } from '../controlleres/admin-webtoon.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Webtoon])],
  controllers: [AdminWebtoonController],
  providers: [],
})
export class WebtoonModule {}
