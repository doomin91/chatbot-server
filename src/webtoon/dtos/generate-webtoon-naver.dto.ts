import { OmitType } from '@nestjs/swagger';
import { WebtoonNaverDto } from './webtoon-naver.dto';

export class GenerateWebtoonNaverDto extends OmitType(WebtoonNaverDto, [
  'id',
]) {}
