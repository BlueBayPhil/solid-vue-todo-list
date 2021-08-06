import { AxiosApi } from "./AxiosApi";
import { BaseApi } from "./BaseApi";
import {FetchApi} from './FetchApi';
import {IApi} from '@/types';

export class Api extends BaseApi implements IApi {
    private provider: any = new AxiosApi();

    async fetch(url: string): Promise<any> {
        return await this.provider.fetch(url);
    }
}