import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TwitchAuthDto } from 'src/twitch/twitch-auth/twitch-auth.dto';
import { TwitchAuthService } from 'src/twitch/twitch-auth/twitch-auth.service';

@Injectable()
export class TwitchService {
  constructor(private twitchAuthService: TwitchAuthService) {}

  async getUsers(userId: string) {
    try {
      const token: TwitchAuthDto =
        await this.twitchAuthService.getClientToken();

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

  async getChannels(broadcasterId: string) {
    try {
      const token: TwitchAuthDto =
        await this.twitchAuthService.getClientToken();

      const bearerToken = `Bearer ${token.accessToken}`;
      const url = `https://api.twitch.tv/helix/channels?broadcaster_id=${broadcasterId}`;
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

  async createPolls() {
    try {
      const token: TwitchAuthDto = await this.twitchAuthService.getAuthToken();

      const bearerToken = `Bearer ${token.accessToken}`;
      const url = `https://api.twitch.tv/helix/polls`;
      const user = await axios({
        method: 'POST',
        url,
        headers: {
          Authorization: bearerToken,
          'Client-Id': process.env.TWITCH_CLIENT_ID,
          'Content-Type': 'application/json',
        },
        data: {
          broadcaster_id: '242748389',
          title: 'Streaming next Tuesday. Which time works best for you?',
          choices: [{ title: '산다' }, { title: '만다' }],
          duration: 300,
          channel_points_voting_enabled: true,
          channel_points_per_vote: 100,
        },
      });

      return user.data;
    } catch (e) {
      throw e;
    }
  }
}
