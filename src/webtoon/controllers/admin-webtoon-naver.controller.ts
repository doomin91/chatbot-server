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
import { WebtoonNaverDto } from '../dtos/webtoon-naver.dto';

@Controller('admin/webtoons-naver')
@ApiTags('네이버웹툰 관리')
export class AdminWebtoonNaverController {
  constructor(private adminWebtoonService: AdminWebtoonService) {}

  @ApiDoc({
    summary: '네이버 웹툰 항목 조회',
    responseModel: WebtoonNaverDto,
    isArrayResponse: true,
  })
  @Get('')
  async findAdminNaverWebtoons(): Promise<ListResponse<WebtoonNaverDto[]>> {
    const { list, count } =
      await this.adminWebtoonService.findAdminNaverWebtoons();
    return new ListResponse(list, count);
  }

  @ApiDoc({
    summary: '네이버 웹툰 스크래핑',
  })
  @Post('')
  async crollingNaverWebtoons() {
    return await this.adminWebtoonService.crollingNaverWebtoons();
  }

  @ApiDoc({
    summary: '네이버 완결웹툰 스크래핑',
  })
  @Post('final')
  async crollingNaverFinalWebtoons() {
    return await this.adminWebtoonService.crollingNaverFinalWebtoons();
  }
}
