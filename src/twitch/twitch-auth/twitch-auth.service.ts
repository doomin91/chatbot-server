import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ExportScraperService } from 'src/scraper/services/export-scraper.service';
import { TwitchAuthDto } from './twitch-auth.dto';
import _ from 'lodash';
import * as constants from '../twitch-auth/twitch-auth.constants';
import { CustomExceptionBuilder } from 'src/logger/custom-exception';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonLogger } from 'nest-winston';
const ceb = new CustomExceptionBuilder(constants);
@Injectable()
export class TwitchAuthService {
  constructor(
    private exportScraperService: ExportScraperService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: WinstonLogger,
  ) {}

  async getClientToken(): Promise<TwitchAuthDto> {
    try {
      const twitchToken = new TwitchAuthDto();

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

      if (!token || !token.data) {
        ceb.throwUnauthorizedException(
          constants.default.errorMessages.FAIL_TO_UNAUTHORIZED,
        );
      }

      const { access_token, expires_in, token_type } = token.data;

      if (!access_token) {
        ceb.throwBadRequestException(
          constants.default.errorMessages.NOT_FOUND_ACCESS_TOKEN,
        );
      }

      twitchToken.accessToken = access_token;
      twitchToken.expiresIn = expires_in;
      twitchToken.tokenType = token_type;
      return twitchToken;
    } catch (e) {
      this.logger.error(e, e.stack);
      ceb.throwUnauthorizedException(e.errorMessages);
    }
  }

  async getCode() {
    try {
      const code = await axios({
        method: 'GET',
        url: `https://id.twitch.tv/oauth2/authorize?responmnse_type=code&client_id=${process.env.TWITCH_CLIENT_ID}&redirect_uri=http://localhost:3000&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671`,
      });

      if (!code || !code.data) {
        ceb.throwUnauthorizedException(
          constants.default.errorMessages.FAIL_TO_UNAUTHORIZED,
        );
      }

      return code;
    } catch (e) {
      this.logger.error(e, e.stack);
      ceb.throwUnauthorizedException(e.errorMessages);
    }
  }

  async getAuthToken() {
    try {
      const code = await this.getCode();
      const twitchToken = new TwitchAuthDto();

      const token = await axios({
        method: 'POST',
        url: 'https://id.twitch.tv/oauth2/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_SECRET_KEY,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: 'http://localhost:3001/',
        },
      });

      if (!token || !token.data) {
        ceb.throwUnauthorizedException(
          constants.default.errorMessages.FAIL_TO_UNAUTHORIZED,
        );
      }

      const { access_token, expires_in, token_type } = token.data;

      if (!access_token) {
        ceb.throwBadRequestException(
          constants.default.errorMessages.NOT_FOUND_ACCESS_TOKEN,
        );
      }

      twitchToken.accessToken = access_token;
      twitchToken.expiresIn = expires_in;
      twitchToken.tokenType = token_type;
      return twitchToken;
    } catch (e) {
      this.logger.error(e, e.stack);
      ceb.throwUnauthorizedException(e.errorMessages);
    }
  }
}
