import { ApiProperty } from '@nestjs/swagger';
import {
  IsCustomEnum,
  IsCustomString,
} from 'src/common/decorators/dto/dto.decorator';
import { CoreSoftEntity } from 'src/common/entities/core-soft.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'Webtoon', schema: process.env.DB_SCHEMA_NAME })
export class Webtoon extends CoreSoftEntity {
  @ApiProperty({
    required: true,
    example: '장르',
    description: 'SF',
  })
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  genre: string;
}
