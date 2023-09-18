import { Module } from '@nestjs/common';
import { TwitchController } from './controllers/twitch.controller';
import { TwitchAuthModule } from '../twitch-auth/twitch-auth.module';

@Module({
  imports: [TwitchAuthModule],
  controllers: [TwitchController],
})
export class TwitchModule {}
