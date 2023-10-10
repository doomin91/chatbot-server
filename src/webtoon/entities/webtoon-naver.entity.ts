import { Column, Entity } from 'typeorm';
import { CoreSoftEntity } from 'src/common/entities/core-soft.entity';
import {
  IsCustomBoolean,
  IsCustomNumber,
  IsCustomString,
} from 'src/common/decorators/dto/dto.decorator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'WebtoonNaver', schema: process.env.DB_SCHEMA_NAME })
export class WebtoonNaver extends CoreSoftEntity {
  @ApiProperty({
    example: 1,
    description: 'NAVER 고유 ID',
    required: false,
  })
  @IsCustomNumber({ required: false, minNumber: 1, maxNumber: 100 })
  @Column({ type: 'int', nullable: true })
  titleId: number;

  @ApiProperty({
    required: false,
    description: '썸네일 URL',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 500,
  })
  @Column({ type: 'varchar', length: 500, nullable: true })
  thumbnailUrl: string;

  @ApiProperty({
    required: false,
    description: '포스터 URL',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 500,
  })
  @Column({ type: 'varchar', length: 500, nullable: true })
  posterThumbnailUrl: string;

  @ApiProperty({
    required: false,
    description: '공유용 썸네일 URL',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 500,
  })
  @Column({ type: 'varchar', length: 500, nullable: true })
  sharedThumbnailUrl: string;

  @ApiProperty({
    required: false,
    example: '제목',
    description: '광마회귀',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: true })
  titleName: string;

  @ApiProperty({
    example: 1,
    description: '컨텐츠 No',
    required: false,
  })
  @IsCustomNumber({ required: false, minNumber: 1, maxNumber: 100 })
  @Column({ type: 'int', nullable: true })
  contentsNo: number;

  @ApiProperty({
    required: false,
    example: 'WEBTOON',
    description: '웹툰 레벨코드',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 20, nullable: true })
  webtoonLevelCode: string;

  @ApiProperty({
    required: false,
    example: true,
    description: '휴재여부',
  })
  @IsCustomBoolean({ required: false })
  @Column({ type: 'boolean', default: false })
  rest: boolean;

  @ApiProperty({
    required: false,
    example: true,
    description: '완결여부',
  })
  @IsCustomBoolean({ required: false })
  @Column({ type: 'boolean', default: false })
  finished: boolean;

  @ApiProperty({
    required: false,
    example: true,
    description: '데일리패스',
  })
  @IsCustomBoolean({ required: false })
  @Column({ type: 'boolean', default: false })
  dailyPass: boolean;

  @ApiProperty({
    required: false,
    example: ['FRIDAY', 'SUNDAY'],
    description: '연재 날짜',
    isArray: true,
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 2000,
  })
  @Column({ type: 'varchar', length: 2000, nullable: true, array: true })
  publishDayOfWeekList: string[];

  @ApiProperty({
    required: false,
    example: true,
    description: '베스트도전 여부',
  })
  @IsCustomBoolean({ required: false })
  @Column({ type: 'boolean', default: false })
  chargeBestChallenge: boolean;

  @ApiProperty({
    required: false,
    example:
      '학교를 자퇴하고 생계를 위해 아르바이트를 전전하는 누리.\n' +
      '신세지고 있던 회장님 댁 아들이 오토바이 사고로 장기입원한다.\n' +
      '회장님의 분노를 염려한 사모님은 아들과 똑 닮은 누리에게 남장을 하고 학교를 대신 다녀줄 것을 제안하는데...\n' +
      '"아니... 사모님, 저는 여자인데요...?',
    description: '시놉시스',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 2000,
  })
  @Column({ type: 'varchar', length: 2000, nullable: true })
  synopsis: string;
  favorite: boolean;

  @ApiProperty({
    example: 1,
    description: '관심수',
    required: false,
  })
  @IsCustomNumber({ required: false, minNumber: 1, maxNumber: 100 })
  @Column({ type: 'int', nullable: true })
  favoriteCount: number;

  @ApiProperty({
    required: false,
    example: 'ALL',
    description: '시청가능 연령',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: true })
  age: string;

  @ApiProperty({
    required: false,
    example: 'ALL',
    description: '시청가능 연령',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: true })
  publishDescription: string;

  @ApiProperty({
    required: false,
    description: '태그',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 500,
  })
  @Column({ type: 'varchar', length: 500, nullable: true, array: true })
  curationTagList: string[];

  @ApiProperty({
    required: false,
    example: true,
    description: '신작여부',
  })
  @IsCustomBoolean({ required: false })
  @Column({ type: 'boolean', default: false })
  new: boolean;

  @ApiProperty({
    required: false,
    description: '웹툰 글작가',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 1000,
  })
  @Column({ type: 'varchar', length: 1000, nullable: true, array: true })
  writers: string[];

  @ApiProperty({
    required: false,
    description: '웹툰 그림작가',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 1000,
  })
  @Column({ type: 'varchar', length: 1000, nullable: true, array: true })
  painters: string[];

  @ApiProperty({
    required: false,
    description: '원작가',
  })
  @IsCustomString({
    required: false,
    minLength: 1,
    maxLength: 1000,
  })
  @Column({ type: 'varchar', length: 1000, nullable: true, array: true })
  origins: string[];
}
