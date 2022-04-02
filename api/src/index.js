import { GraphQLServer } from 'graphql-yoga';
import { CronJob } from 'cron';
import admin from 'firebase-admin';
import { environment } from './environments/environment';
import NomicsConnector from './nomicsConnector';

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
    nomics: new NomicsConnector(environment.nomicsApiKey),
  },
});

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(environment.serviceAccountKey),
});
const db = admin.firestore();

const nomics = new NomicsConnector(environment.nomicsApiKey);

const updateCoins = async () => {
  const allCoins = await nomics.getTopCoins();
  const topCoins = allCoins.slice(0, 500);

  topCoins.forEach(async (element) => {
    await db.collection('coins').doc(element.id).set(element);
  });

  return console.log(`Updated ${topCoins.length} coins`);
};

// Cron job to update the data every minute
// var job = new CronJob('* * * * *', () => {
//   console.log('Updating data...');
//   updateCoins();
// }, null, true, 'Europe/Copenhagen');
// job.start();

// Go to http://localhost:4000 to test the API
server.start(() => console.log('Server running on http://localhost:4000'));

updateCoins();
