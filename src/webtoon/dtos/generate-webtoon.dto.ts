import { OmitType } from '@nestjs/swagger';
import { WebtoonDto } from './webtoon.dto';

export class GenerateWebtoonDto extends OmitType(WebtoonDto, ['id']) {}
