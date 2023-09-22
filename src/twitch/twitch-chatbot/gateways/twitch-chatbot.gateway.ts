import { TwitchChatbotService } from '../services/twtich-chatbot.service';
import { WebSocketGateway } from '@nestjs/websockets';
import { Client } from 'tmi.js';
import constants from '../twitch-chatbot.constants';
/**
 * @TODO @WebSocketGateway() 실제 WebSocketGateWay는 활용되지 않고 있어 tmi.js 분석 후 전환 필요
 */
@WebSocketGateway()
export class TwitchChatbotGateway {
  client;
  constructor(private twtichChatbotService: TwitchChatbotService) {}

  afterInit() {
    const opts = {
      // NIGHTBOT, 싹뚝 등의 말하기 주체
      identity: {
        username: process.env.TWITCH_NICK_NAME,
        password: process.env.TWITCH_OAUTH,
      },
      // 이후 관리될 계정들로 변경, DB저장 필요
      channels: constants.props.TWITCH_CHANNELS,
    };
    this.client = new Client(opts);
    this.client.connect();

    this.client.on('connected', (addr, port) => {
      console.log(`* Connected to ${addr}:${port}`);
    });

    this.client.on('message', (target, context, msg, self) => {
      if (self) return;
      const commandName = msg.trim();
      this.onMessageHandler(target, context, commandName);
    });
  }

  onMessageHandler(target, context, commandName) {
    // If the command is known, let's execute it
    const subscriber = context['subscriber'];
    const firstMessage = context['first-msg'];
    const userId = context['user-id'];
    const roomId = context['room-id'];
    const displayName = context['disaply-name'];
    const userName = context['username'];
    const userType = context['user-type'];

    if (firstMessage) {
      this.client.say(`${displayName}님 너무 반가워요!`);
    }

    if (userId === roomId) {
      if (commandName === '!게임 좀보이드') {
        this.client.say(
          target,
          `현재 챗봇의 게임 명령어가 '좀보이드'로 재설정되었습니다.`,
        );
      }
    }

    switch (commandName) {
      case '!생존':
        this.client.say(target, `${target} killed 100 zombies, 1 hours suvive`);
        break;
      case '!헬기':
        this.client.say(target, `헬기 이벤트가 시작됩니다.`);
        break;
      default:
      // this.client.say(target, `You typed ${commandName}`);
    }
  }
}
