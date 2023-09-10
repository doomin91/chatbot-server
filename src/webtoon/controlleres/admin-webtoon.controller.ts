import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiDoc } from 'src/common/decorators/swagger/api-doc.decorator';
import { ObjectResponse } from 'src/common/dtos/object-response.dto';

@Controller('admin/webtoon')
@ApiTags('웹툰 항목 관리')
export class AdminWebtoonController {
  @ApiDoc({
    summary: '웹툰 항목을 조회합니다.',
  })
  @Get('')
  async findAdminWebtoons(): Promise<ObjectResponse<number>> {
    return new ObjectResponse(1);
  }
}
