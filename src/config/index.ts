import * as dotenv from 'dotenv';

dotenv.config();

interface Config {
  mercadoBitcoin: {
    clientId: string;
    clientSecret: string;
  };
}


export const config: Config = {
  mercadoBitcoin: {
    clientId: process.env.MB_CLIENT_ID || '',
    clientSecret: process.env.MB_CLIENT_SECRET || '',
  }
}
