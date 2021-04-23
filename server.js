import express from 'express';
import cors from 'cors';

import { ApolloServer } from 'apollo-server-express';

import resolvers from './src/resolvers';
import typeDefs from './src/types';
import CryoboardAPI from './src/dataSource/cryoboard.ds';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		cryoboardAPI: new CryoboardAPI(),
	}),
});

const app = express();
app.use(cors());

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
