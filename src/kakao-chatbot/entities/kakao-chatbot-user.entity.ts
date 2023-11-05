import { ApiProperty } from '@nestjs/swagger';
import {
  IsCustomNumber,
  IsCustomString,
} from 'src/common/decorators/dto/dto.decorator';
import { CoreSoftEntity } from 'src/common/entities/core-soft.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'KakaoChatBotUser', schema: process.env.DB_SCHEMA_NAME })
export class KakaoChatBotUser extends CoreSoftEntity {
  @ApiProperty({
    example: 18,
    description: '유저 ID',
    required: true,
  })
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  userId: string;

  @ApiProperty({
    required: true,
    example: '웹툰추천',
    description: '현재상태',
  })
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  status: string;
}
