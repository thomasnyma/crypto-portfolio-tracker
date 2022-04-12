import { Coin } from "./coin.model";

export interface AllCoinsQueryResponse {
    getCoinInfo: Coin[];
}

export interface CoinQueryResponse {
    coin: Coin;
}