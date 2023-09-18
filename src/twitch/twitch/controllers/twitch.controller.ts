import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiDoc } from 'src/common/decorators/swagger/api-doc.decorator';
import { TwitchAuthService } from 'src/twitch/twitch-auth/twitch-auth.service';

@Controller('twitch')
@ApiTags('트위치')
export class TwitchController {
  constructor(private twitchAuthService: TwitchAuthService) {}
  @ApiDoc({
    summary: 'Get Twitch OAuth Token',
  })
  @Post('token')
  async getToken() {
    return await this.twitchAuthService.getToken();
  }
}
