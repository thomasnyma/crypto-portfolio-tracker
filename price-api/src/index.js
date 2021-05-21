import { GraphQLServer } from 'graphql-yoga';
import NomicsConnector from './nomicsConnector';

const NOMICS_API_KEY = '656168ea65bbcbbd4b425c89446b2ed7';

const typeDefs = `
  type Coin {
    currency: String
    id: String
    status: String
    price: String
    price_date: String
    price_timestamp: String
    symbol: String
    circulating_supply: String
    max_supply: String
    name: String
    logo_url: String
    market_cap: String
    market_cap_dominance: String
    transparent_market_cap: String
    num_exchanges: String
    num_pairs: String
    num_pairs_unmapped: String
    first_candle: String
    first_trade: String
    first_order_book: String
    first_priced_at: String
    rank: String
    rank_delta: String
    high: String
    high_timestamp: String
  }

  type Query {
	  getCoinInfo(currency: String!): [Coin]
  }
`;

const resolvers = {
	Query: {
		getCoinInfo: (root, variables, context) =>
			context.nomics.getCoinInfo(variables.currency),
	},
};

const server = new GraphQLServer({
	typeDefs,
	resolvers,
	context: {
		nomics: new NomicsConnector(NOMICS_API_KEY),
	},
});

// Go to http://localhost:4000 to test the API
server.start(() => console.log('Server running on http://localhost:4000'));
