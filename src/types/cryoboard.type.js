import { gql } from 'apollo-server-express';

const cryoboardTypeDefs = gql`
	type Chart {
		date: String
		saleCount: Float
		quantity: Float
		equity: Float
	}

	type Report {
		id: ID!
		accountId: Int
		accountType: String
		displayName: String
		role: String
	}

	type ReportDetail {
		id: ID!
		accountId: Int
		accountType: String
		displayName: String
		role: String
		acceptedTradeQuantity: Float
		tradeDate: String
		price: Float
		volume: Float
		quantity: Float
	}

	type Query {
		chartData: [Chart]
		reportData: [Report]
		reportDetailData(id: ID!): ReportDetail
	}
`;

export default cryoboardTypeDefs;
