import axios, { AxiosInstance } from 'axios';
import { IMercadoBitcoinAccounts, IMercadoBitcoinAccountsBalances, IMercadoBitcoinOrders, IMercadoBitcoinPositions } from '../types';


export class MercadoBitcoin {

  private clientId: string;
  private clientSecret: string;
  private accessToken?: string;
  private axiosInstance: AxiosInstance;

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.axiosInstance = axios.create({
      baseURL: 'https://api.mercadobitcoin.net/api/v4',
    });
  }


  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  public async getAccessToken(): Promise<string> {
    if (!this.accessToken) {
      const { access_token } = await this.authenticate();
      this.accessToken = access_token;
    }
    return this.accessToken;
  }


  private async authHeader() {
    await this.getAccessToken();
    return {
      Authorization: `Bearer ${this.accessToken}`
    };
  }


  public async authenticate(): Promise<{ access_token: string; expiration: number }> {
    const response = await this.axiosInstance.post('/authorize', {
      login: this.clientId,
      password: this.clientSecret
    });
    return response.data;
  }


  public async getAccounts(): Promise<IMercadoBitcoinAccounts[]> {
    const { data } = await this.axiosInstance.get('/accounts', {
      headers: await this.authHeader()
    });
    return data;
  }


  public async getBalances(accountId: string): Promise<IMercadoBitcoinAccountsBalances[]> {
    const { data } = await this.axiosInstance.get(`/accounts/${accountId}/balances`, {
      headers: await this.authHeader()
    });
    return data;
  }


  public async getPositions(accountId: string): Promise<IMercadoBitcoinPositions[]> {
    const { data } = await this.axiosInstance.get(`/accounts/${accountId}/positions`, {
      headers: await this.authHeader()
    });
    return data;
  }


  public async getOrders(accountId: string, symbol: string): Promise<IMercadoBitcoinOrders[]> {
    const { data } = await this.axiosInstance.get(`/accounts/${accountId}/${symbol}/orders`, {
      headers: await this.authHeader()
    });
    return data;
  }

  

}