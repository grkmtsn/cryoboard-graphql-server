import { RESTDataSource } from 'apollo-datasource-rest';

const BASE_URL = 'http://www.json-generator.com/api/json/get/bUgMRhYjKG';

class CryoboardAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = BASE_URL;

		this.cryoboardChartReducer = (data) => {
			return {
				date: new Date(data.date).toLocaleDateString(),
				saleCount: data.saleCount,
				quantity: data.quantity,
				equity: data.equity,
			};
		};

		this.cryoboardReportReducer = (data) => {
			return {
				id: data.id,
				accountId: data.accountId,
				accountType: data.accountType,
				displayName: data.displayName,
				role: data.role,
			};
		};

		this.cryoboardReportDetailReducer = (data) => {
			return {
				id: data.id,
				accountId: data.accountId,
				accountType: data.accountType,
				displayName: data.displayName,
				role: data.role,
				acceptedTradeQuantity: data.acceptedTradeQuantity,
				tradeDate: new Date(data.tradeDate).toLocaleDateString(),
				price: data.price,
				volume: data.volume,
				quantity: data.quantity,
			};
		};
	}

	async getChartData() {
		const { graphData } = await this.get('/');
		return Array.isArray(graphData)
			? graphData.map((data) => this.cryoboardChartReducer(data))
			: [];
	}

	async getReportData() {
		const { nodes } = await this.get('/');
		return Array.isArray(nodes) ? nodes.map((data) => this.cryoboardReportReducer(data)) : [];
	}

	async getReportDetailData(id) {
		const { nodes } = await this.get('/');
		const node = nodes.find((item) => item.id === Number(id));
		return this.cryoboardReportDetailReducer(node);
	}
}

export default CryoboardAPI;
