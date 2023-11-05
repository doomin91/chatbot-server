import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { KakaoRequestBodyDto } from '../dtos/kakao-skill-request-dto';
import { Request, Response } from 'express';

@Controller('webtoons')
@ApiTags('웹툰')
export class WebtoonController {}
