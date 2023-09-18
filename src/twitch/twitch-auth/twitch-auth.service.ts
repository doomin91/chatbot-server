import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ExportScraperService } from 'src/scraper/services/export-scraper.service';

@Injectable()
export class TwitchAuthService {
  constructor(private exportScraperService: ExportScraperService) {}

  async getToken() {
    try {
      const token = await axios({
        method: 'POST',
        url: 'https://id.twitch.tv/oauth2/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_SECRET_KEY,
          grant_type: 'client_credentials',
        },
      });
      return JSON.stringify(token.data);
    } catch (e) {
      throw e;
    }
  }
}
