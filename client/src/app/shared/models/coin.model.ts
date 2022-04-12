export interface Coin {
  currency: string;
  id: string;
  status: string;
  price: string;
  price_date: string;
  price_timestamp: string;
  symbol: string;
  circulating_supply: string;
  max_supply: string;
  name: string;
  logo_url: string;
  market_cap: string;
  market_cap_dominance: string;
  transparent_market_cap: string;
  num_exchanges: string;
  num_pairs: string;
  num_pairs_unmapped: string;
  first_candle: string;
  first_trade: string;
  first_order_book: string;
  first_priced_at: string;
  rank: string;
  rank_delta: string;
  high: string;
  high_timestamp: string;
}

export interface CoinQueryResponse {
  getCoinInfo: Coin;
}
