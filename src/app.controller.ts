import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

const DOMAIN =
  'https://api.cv23r3-electrolu1-d2-public.model-t.cc.commerce.ondemand.com/eluxd2ccommercewebservice/v2/ITA-ELX';

@Controller('users/anonymous/carts')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Post()
  async post(
    @Query('fields') fields: string,
    @Query('oldCartId') oldCartId: string,
    @Query('toMergeCartGuid') toMergeCartGuid: string,
    @Body() data: any,
    @Req() request: Request,
  ): Promise<AxiosResponse<any>> {
    const a = await this.httpService.axiosRef.post(`${DOMAIN}${request.url}`, {
      data,
    });
    return a.data;
  }

  @Get(':cartId')
  async get(
    @Query('fields') fields: string,
    @Query('oldCartId') oldCartId: string,
    @Query('toMergeCartGuid') toMergeCartGuid: string,
    @Req() request: Request,
  ): Promise<AxiosResponse<any>> {
    try {
      console.log(request.url, 2);
      const a = await this.httpService.axiosRef.get(`${DOMAIN}${request.url}`);
      return a.data;
    } catch (error) {
      console.log(error, '3');
    }
  }

  @Post(':cartId/multipleentries')
  async addProduct(
    @Query('fields') fields: string,
    @Query('oldCartId') oldCartId: string,
    @Query('toMergeCartGuid') toMergeCartGuid: string,
    @Body() body: any,
    @Req() request: Request,
  ): Promise<AxiosResponse<any>> {
    try {
      console.log(body);
      const a = await this.httpService.axiosRef.post(
        `${DOMAIN}${request.url}`,
        { entries: [{ product: { code: '943003365' }, quantity: 1 }] },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      console.log('true 5');
      return a.data;
    } catch (error) {
      console.log(error);
    }
  }
}
