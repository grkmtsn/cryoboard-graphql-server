export default {
	chartData: (obj, args, { dataSources }) => {
		return dataSources.cryoboardAPI.getChartData();
	},
	reportData: (obj, args, { dataSources }) => {
		return dataSources.cryoboardAPI.getReportData();
	},
	reportDetailData: (obj, { id }, { dataSources }) => {
		return dataSources.cryoboardAPI.getReportDetailData(id);
	},
};
