import { IsObject } from 'class-validator';

export class KakaoRequestDto extends Request {
  @IsObject()
  userRequest: object;
}
