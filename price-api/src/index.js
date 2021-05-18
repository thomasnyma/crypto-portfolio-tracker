import { GraphQLServer } from 'graphql-yoga';
import NomicsConnector from './nomicsConnector';

const NOMICS_API_KEY = '656168ea65bbcbbd4b425c89446b2ed7';

const typeDefs = `
  type Query {
    exchangeRate(currency: String!): Float
  }
`;

const resolvers = {
	Query: {
		exchangeRate: (root, variables, context) =>
			context.nomics.getPrice(variables.currency),
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
