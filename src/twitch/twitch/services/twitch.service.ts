import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TwitchAuthDto } from 'src/twitch/twitch-auth/twitch-auth.dto';
import { TwitchAuthService } from 'src/twitch/twitch-auth/twitch-auth.service';

@Injectable()
export class TwitchService {
  constructor(private twitchAuthService: TwitchAuthService) {}

  async getUsers(userId: string) {
    try {
      const token: TwitchAuthDto = await this.twitchAuthService.getToken();

      const bearerToken = `Bearer ${token.accessToken}`;
      const url = `https://api.twitch.tv/helix/users?login=${userId}`;
      const user = await axios({
        method: 'GET',
        url,
        headers: {
          Authorization: bearerToken,
          'Client-Id': process.env.TWITCH_CLIENT_ID,
        },
      });

      return user.data;
    } catch (e) {
      throw e;
    }
  }
}
