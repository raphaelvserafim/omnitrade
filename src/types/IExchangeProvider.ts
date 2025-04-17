export interface IBalance {
  symbol: string;
  total: string;
}

export interface IAccount {
  id: string;
  name?: string;
  currency?: string;
  type?: string;
}

export interface IPositions {
  avgPrice: number;
  category: string;
  id: string;
  instrument: string;
  qty: string;
  side: string;
}



export interface IExchangeProvider {
  getName(): string;
  getAccounts(): Promise<IAccount[]>;
  getBalances(accountId?: string): Promise<IBalance[]>;
  getAccessToken(): Promise<string>;
  setAccessToken(accessToken: string): void;
  authenticate(): Promise<{ access_token: string; expiration: number }>;
  getPositions(accountId: string): Promise<IPositions[]>;
  getOrders(accountId: string, symbol: string): Promise<any[]>;
}