import { IBalance, IExchangeProvider, IPositions } from "../types";
import { MercadoBitcoin } from "../services";


/**
 * Mercado Bitcoin Provider
 * @author Raphael Serafim <https://github.com/raphaelvserafim>
 * @version 1.0.0
 * @license MIT
 * @description This class provides an implementation of the IExchangeProvider interface for the Mercado Bitcoin exchange.
 * @class MercadoBitcoinProvider
 * @implements {IExchangeProvider}
 * @constructor
 * @param {string} clientId - The client ID for the Mercado Bitcoin API.
 * @param {string} clientSecret - The client secret for the Mercado Bitcoin API.
 * @example
 * const mercadoBitcoinProvider = new MercadoBitcoinProvider('clientId', 'clientSecret');
 */


export class MercadoBitcoinProvider implements IExchangeProvider {
  private client: MercadoBitcoin;

  constructor(clientId: string, clientSecret: string) {
    this.client = new MercadoBitcoin(clientId, clientSecret);

  }


  getName(): string {
    return 'Mercado Bitcoin';
  }

  getAccessToken(): Promise<string> {
    return this.client.getAccessToken();
  }

  setAccessToken(accessToken: string): void {
    return this.client.setAccessToken(accessToken);
  }


  async authenticate(): Promise<{ access_token: string; expiration: number; }> {
    return this.client.authenticate();
  }


  async getAccounts() {
    return await this.client.getAccounts();
  }

  async getBalances(accountId: string): Promise<IBalance[]> {
    return await this.client.getBalances(accountId);
  }


  async getPositions(accountId: string): Promise<IPositions[]> {
    const positions = await this.client.getPositions(accountId);

    return positions;

  }

  async getOrders(accountId: string, symbol: string): Promise<any[]> {
    const orders = await this.client.getOrders(accountId, symbol);
    return orders;
  }

}