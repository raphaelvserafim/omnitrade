import { IExchangeProvider } from "../types";

/**
 * Exchange Manager
 * @author Raphael Serafim <https://github.com/raphaelvserafim>
 * @version 1.0.0
 * @license MIT
 * @description This class provides an implementation of the IExchangeProvider interface for the Mercado Bitcoin exchange.
 * @class ExchangeManager
 * @implements {IExchangeProvider}
 * @param {IExchangeProvider} provider - The exchange provider to be used.
 * @example
 * const exchangeManager = new ExchangeManager(new MercadoBitcoinProvider('clientId', 'clientSecret'));
 * exchangeManager.getExchangeName(); // 'Mercado Bitcoin'
 **/


export class ExchangeManager {
  private provider: IExchangeProvider;

  constructor(provider: IExchangeProvider) {
    this.provider = provider;
  }

  public getExchangeName() {
    return this.provider.getName();
  }



  public async fetchAllAccounts() {
    const accounts = await this.provider.getAccounts();
    return accounts.map((account) => {
      return {
        id: account.id,
        name: account.name || "",
        type: account.type || "",
        currency: account.currency || "",
      };
    });
  }


  public async fetchAllBalances() {
    const accounts = await this.fetchAllAccounts();
    const balances = await Promise.all(
      accounts.map(async (account) => {
        const accountBalances = await this.provider.getBalances(account.id);
        return {
          accountId: account.id,
          balances: accountBalances.sort(
            (a, b) => parseFloat(b.total) - parseFloat(a.total)
          ),
        };
      })
    );
    return balances;
  }


  public async fetchAllPositions() {
    const accounts = await this.fetchAllAccounts();
    const positions = await Promise.all(
      accounts.map(async (account) => {
        const accountPositions = await this.provider.getPositions(account.id);
        return {
          accountId: account.id,
          positions: accountPositions,
        };
      })
    );
    return positions;
  }


  public async getPositionsByAccount(accountId: string) {
    const accountPositions = await this.provider.getPositions(accountId);
    return {
      accountId: accountId,
      positions: accountPositions.sort(
        (a, b) => parseFloat(b.qty) - parseFloat(a.qty)
      ),
    };
  }


  public async getOrdersByAccount(accountId: string, symbol: string) {
    const orders = await this.provider.getOrders(accountId, symbol);
    return {
      accountId: accountId,
      orders: orders,
    };
  }

}