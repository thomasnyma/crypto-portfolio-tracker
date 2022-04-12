import axios from 'axios';
import memoize from 'memoizee';

class NomicsConnector {
  constructor(apiKey) {
    this.client = axios.create({
      baseURL: 'https://api.nomics.com/v1',
      method: 'get',
      responseType: 'json',
      params: { key: apiKey },
    });

    // this.getPricesByCurrencyCached = memoize(this.getPricesByCurrency, {
    // 	maxAge: 300000, // 5 minutes til cache expiration
    // 	preFetch: 0.05, // pre-fetch 15s before expiration
    // 	promise: 'then', // handle async
    // });

    // this.getCoinInfoCached(currency) = memoize(this.getCoinInfo(currency), {
    // 	maxAge: 300000, // 5 minutes til cache expiration
    // 	preFetch: 0.05, // pre-fetch 15s before expiration
    // 	promise: 'then', // handle async
    // });
  }

  // async getPrices() {
  // 	const res = await this.client('/prices');
  // 	return res.data;
  // }

  // async getPricesByCurrency() {
  // 	const prices = await this.getPrices();
  // 	return prices.reduce((pricesByCurrency, { currency, price }) => {
  // 		pricesByCurrency[currency] = price;
  // 		return pricesByCurrency;
  // 	}, {});
  // }

  async getCoinInfo(currency) {
    const res = await this.client('/currencies/ticker', {
      params: { ids: currency },
    });
    return res.data[0];
  }

  async getAllCoins() {
    const res = await this.client('/currencies', {
      params: { attributes: 'id,name,logo_url' },
    });
    return res.data;
  }

  async getTopCoins() {
    const res = await this.client('/currencies/ticker', {
      params: { sort: 'rank', attributes: 'id,name,logo_url' },
    });
    return res.data;
  }

  // async getPrice(currency) {
  // 	const pricesByCurrency = await this.getPricesByCurrencyCached();
  // 	return pricesByCurrency[currency];
  // }
}

export default NomicsConnector;
