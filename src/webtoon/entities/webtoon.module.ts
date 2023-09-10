import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Webtoon } from './webtoon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Webtoon])],
  controllers: [],
  providers: [],
})
export class WebtoonModule {}
