# OmniTrade

**OmniTrade** is a modular and extensible platform designed to integrate with multiple cryptocurrency exchanges.  
It supports authentication, account information, balances, open positions, and order history.  
The architecture is built to serve as the foundation for an AI-driven trading system.

---

## 🚀 Purpose

The main goals of this project are:

- ✅ Centralize integration with multiple crypto exchanges.  
- ✅ Provide a unified interface for accessing accounts, balances, positions, and orders.  
- ✅ Enable future implementation of AI-based trading logic.  
- ✅ Be secure, modular, and easy to maintain.

---

## 🧠 Architecture Overview

```
src/
├── core/
│   └── ExchangeManager.ts       # Main class to manage exchanges
├── providers/
│   └── MercadoBitcoinProvider.ts # Implementation for Mercado Bitcoin
├── config/
│   └── index.ts                  # Environment config loader
├── types/                        # Type interfaces
├── index.ts                      # Entry point
```

---

## ✅ Current Status

| Feature                        | Status        |
|-------------------------------|---------------|
| Mercado Bitcoin Integration   | ✅             |
| Fetching Accounts             | ✅             |
| Fetching Balances             | ✅             |
| Fetching Positions            | 🔄 In Progress |
| Fetching Orders               | 🔄 In Progress |
| Binance Integration           | 🔲 Planned     |
| AI Trading Logic (API)        | 🔲 Planned     |

---

## ⚙️ Installation

1. Clone the repository:
```
git clone https://github.com/raphaelvserafim/omnitrade.git
```

2. Navigate into the folder:
```
cd omnitrade
```

3. Install dependencies:
```
npm install
```

---

## 🔐 Configuration

Create a `.env` file in the root directory and set your credentials:

```
MB_CLIENT_ID=your_client_id
MB_CLIENT_SECRET=your_client_secret
```

These are loaded in the `config` module.

---

## 🧪 Running the Project

Using `tsx`:
```
npx tsx index.ts
```

Using `ts-node`:
```
npx ts-node index.ts
```

---

## 🔍 Example Usage

```ts
const MBProvider = new MercadoBitcoinProvider(clientId, clientSecret);
const authenticate = await MBProvider.authenticate();
  if (!authenticate) {
    console.log("Authentication failed");
    return;
  }

console.log("Authentication successful", authenticate.access_token);
  

MBProvider.setAccessToken(authenticate.access_token);

const manager = new ExchangeManager(MBProvider);

console.log(manager.getExchangeName());

const accounts = await manager.fetchAllAccounts();
console.dir(accounts, { depth: null });

const balances = await manager.fetchAllBalances();
console.dir(balances, { depth: null });

```

---

## ➕ Adding New Exchanges

1. Create a new file in `src/providers` (e.g., `BinanceProvider.ts`)  
2. Implement the `IExchangeProvider` interface  
3. Inject the provider into `ExchangeManager`

---

## 🗺️ Roadmap

- [x] Authentication for Mercado Bitcoin  
- [x] Account and balance fetching  
- [ ] Position and order fetching  
- [ ] Binance, KuCoin, OKX support  
- [ ] AI integration (e.g., TensorFlow.js, GPT API)  
- [ ] Web dashboard  

---

## 📜 License

MIT © Raphael Serafim

---

## 🤝 Contributing

Pull requests are welcome.  
Please open an issue to discuss major changes or improvements.
