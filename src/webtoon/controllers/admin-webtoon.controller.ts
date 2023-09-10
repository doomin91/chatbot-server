import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiDoc } from 'src/common/decorators/swagger/api-doc.decorator';
import { ObjectResponse } from 'src/common/dtos/object-response.dto';
import { AdminWebtoonService } from '../services/admin-webtoon.service';
import { ListResponse } from 'src/common/dtos/list-response.dto';
import { WebtoonDto } from '../dtos/webtoon.dto';
import { GenerateWebtoonDto } from '../dtos/generate-webtoon.dto';

@Controller('admin/webtoons')
@ApiTags('ADMIN 웹툰 항목')
export class AdminWebtoonController {
  constructor(private adminWebtoonService: AdminWebtoonService) {}
  @ApiDoc({
    summary: '웹툰 항목 조회',
    responseModel: WebtoonDto,
    isArrayResponse: true,
  })
  @Get('')
  async findAdminWebtoons(): Promise<ListResponse<WebtoonDto[]>> {
    const { list, count } = await this.adminWebtoonService.findAdminWebtoons();
    return new ListResponse(list, count);
  }

  @ApiDoc({
    summary: '웹툰 항목 추가',
  })
  @Post('')
  async insertAdminWebtoons(
    @Body() generateWebtoonDto: GenerateWebtoonDto,
  ): Promise<void> {
    await this.adminWebtoonService.insertWebtoons(generateWebtoonDto);
  }

  @ApiDoc({
    summary: '웹툰 항목 수정',
  })
  @Put('')
  async updateAdminWebtoons(): Promise<void> {
    await this.adminWebtoonService.updateWebtoonById(1);
  }

  @ApiDoc({
    summary: '웹툰 항목 수정',
  })
  @Delete('')
  async deleteAdminWebtoons(): Promise<ObjectResponse<number>> {
    return new ObjectResponse(1);
  }
}
