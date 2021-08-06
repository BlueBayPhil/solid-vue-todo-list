import {IApi} from '@/types';


export class BaseApi implements IApi {
    protected baseUrl = 'https://jsonplaceholder.typicode.com/';

    async fetch(url: string): Promise<any> {
        const response = await(fetch(`${this.baseUrl}${url}`));
        return await response.json();
    }
}