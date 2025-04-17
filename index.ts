import { config } from "./src/config";
import { ExchangeManager } from "./src/core";
import { MercadoBitcoinProvider } from "./src/providers";

 
async function main() {

  const MBProvider = new MercadoBitcoinProvider(
    config.mercadoBitcoin.clientId,
    config.mercadoBitcoin.clientSecret
  );

  // const authenticate = await MBProvider.authenticate();
  // if (!authenticate) {
  //   console.log("Authentication failed");
  //   return;
  // }

  //console.log("Authentication successful", authenticate.access_token);
  
  // Set the access token
  MBProvider.setAccessToken("");

  const MB = new ExchangeManager(MBProvider);
  
  console.log(MB.getExchangeName());

  // const accounts = await MB.fetchAllAccounts();
  // console.log(accounts);

  // const balances = await MB.fetchAllBalances();
  // console.dir(balances, { depth: null });

  // const allPositions = await MB.fetchAllPositions();
  // console.dir(allPositions, { depth: null });

  // const positionsByAccount = await MB.getPositionsByAccount("");
  // console.dir(positionsByAccount, { depth: null });


 // const orders = await MB.getOrdersByAccount("", "SHIB-BRL");
  //console.dir(orders, { depth: null });



}

main().catch(console.error);