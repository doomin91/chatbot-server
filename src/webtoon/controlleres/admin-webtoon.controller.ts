import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiDoc } from 'src/common/decorators/swagger/api-doc.decorator';
import { ObjectResponse } from 'src/common/dtos/object-response.dto';

@Controller('admin/webtoons')
@ApiTags('ADMIN 웹툰 항목')
export class AdminWebtoonController {
  @ApiDoc({
    summary: '웹툰 항목 조회',
  })
  @Get('')
  async findAdminWebtoons(): Promise<ObjectResponse<number>> {
    return new ObjectResponse(1);
  }

  @ApiDoc({
    summary: '웹툰 항목 추가',
  })
  @Post('')
  async insertAdminWebtoons(): Promise<ObjectResponse<number>> {
    return new ObjectResponse(1);
  }

  @ApiDoc({
    summary: '웹툰 항목 수정',
  })
  @Put('')
  async updateAdminWebtoons(): Promise<ObjectResponse<number>> {
    return new ObjectResponse(1);
  }

  @ApiDoc({
    summary: '웹툰 항목 수정',
  })
  @Delete('')
  async deleteAdminWebtoons(): Promise<ObjectResponse<number>> {
    return new ObjectResponse(1);
  }
}
