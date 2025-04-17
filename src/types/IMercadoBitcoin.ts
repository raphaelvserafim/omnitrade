
export interface IMercadoBitcoinAccounts {
  currency: string
  currencySign: string
  id: string
  name: string
  type: string
}

export interface IMercadoBitcoinAccountsBalances {
  available: string
  on_hold: string
  symbol: string
  total: string
}


export interface IMercadoBitcoinPositions {
  avgPrice: number
  category: string
  id: string
  instrument: string
  qty: string
  side: string
}



export interface IMercadoBitcoinOrders {
  avgPrice: number
  cost: number
  created_at: number
  executions: IMercadoBitcoinOrdersExecution[]
  externalId: string
  fee: string
  filledQty: string
  id: string
  instrument: string
  limitPrice: number
  qty: string
  side: string
  status: string
  stopPrice: number
  triggerOrderId: string
  type: string
  updated_at: number
}

export interface IMercadoBitcoinOrdersExecution {
  executed_at: number
  fee_rate: string
  id: string
  instrument: string
  price: number
  qty: string
  side: string
  liquidity: string
}
