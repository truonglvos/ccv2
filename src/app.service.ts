import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

const DOMAIN =
  'https://api.cv23r3-electrolu1-d2-public.model-t.cc.commerce.ondemand.com/eluxd2ccommercewebservice/v2/ITA-ELX';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }
  createCartID(): Promise<AxiosResponse<any>> {
    return this.httpService.axiosRef.post(
      'https://api.cv23r3-electrolu1-d2-public.model-t.cc.commerce.ondemand.com/eluxd2ccommercewebservice/v2/ITA-ELX/users/anonymous/carts?fields=DEFAULT&oldCartId=&toMergeCartGuid=',
    );
  }
}
