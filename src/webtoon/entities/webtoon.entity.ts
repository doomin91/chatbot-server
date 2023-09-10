import { ApiProperty } from '@nestjs/swagger';
import {
  IsCustomBoolean,
  IsCustomEnum,
  IsCustomNumber,
  IsCustomString,
} from 'src/common/decorators/dto/dto.decorator';
import { CoreSoftEntity } from 'src/common/entities/core-soft.entity';
import { Column, Entity } from 'typeorm';
import { WorkGenre, WorkTag } from '../webtoon.constants';
import { ArrayMaxSize, ArrayMinSize, IsArray } from 'class-validator';

@Entity({ name: 'Webtoon', schema: process.env.DB_SCHEMA_NAME })
export class Webtoon extends CoreSoftEntity {
  @ApiProperty({
    required: true,
    example: '광마회귀',
    description: '제목',
  })
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @ApiProperty({
    required: true,
    example: ['도미닉', '도미닉'],
    description: '글작가',
  })
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 50,
  })
  @Column({ type: 'varchar', length: 50, nullable: false, array: true })
  writer: string[];

  @ApiProperty({
    required: false,
    example: ['도미닉', '도미닉'],
    description: '그림작가',
  })
  @IsCustomString({
    required: false,
    minLength: 0,
    maxLength: 50,
  })
  @Column({ type: 'varchar', length: 50, nullable: true, array: true })
  illustrator: string[];

  @ApiProperty({
    required: false,
    example: '설명',
  })
  @IsCustomString({
    required: false,
    minLength: 0,
    maxLength: 1000,
  })
  @Column({ type: 'varchar', length: 1000, nullable: true })
  description: string;

  @ApiProperty({
    required: true,
    example: [WorkGenre.SF, WorkGenre.아포칼립스],
    description: '장르',
    isArray: true,
  })
  @IsArray()
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 50,
  })
  @Column({ type: 'varchar', length: 50, array: true, nullable: false })
  genre: string[];

  @ApiProperty({
    required: false,
    example: [WorkTag.히어로, WorkTag.현대, WorkTag.좀비],
    description: '작품 태그',
  })
  @IsCustomString({
    required: false,
    minLength: 0,
    maxLength: 1000,
  })
  @Column({ type: 'varchar', length: 1000, nullable: true, array: true })
  tag: string[];

  @ApiProperty({
    required: false,
    example: '네이버',
    description: '출처',
  })
  @IsCustomString({
    required: false,
    minLength: 0,
    maxLength: 1000,
  })
  @Column({ type: 'varchar', length: 100, nullable: true })
  source: string[];

  @ApiProperty({
    required: false,
    example: true,
    description: '원작여부',
  })
  @IsCustomBoolean({ required: false })
  @Column({ type: 'boolean', default: false })
  originaility: boolean;

  @ApiProperty({
    required: false,
    example: true,
    description: '리메이크여부',
  })
  @IsCustomBoolean({ required: false })
  @Column({ type: 'boolean', default: false })
  remaked: boolean;

  @ApiProperty({
    required: false,
    example: true,
    description: '방송여부',
  })
  @IsCustomBoolean({ required: false })
  @Column({ type: 'boolean', default: false })
  broadcasted: boolean;

  @ApiProperty({
    example: 18,
    description: '시청가능 연령',
    required: false,
  })
  @IsCustomNumber({ required: false, minNumber: 1, maxNumber: 100 })
  @Column({ type: 'int', nullable: true })
  age: number;

  @ApiProperty({
    required: false,
    example: true,
    description: '무료여부',
  })
  @IsCustomBoolean({ required: false })
  @Column({ type: 'boolean', default: false })
  free: boolean;
}
