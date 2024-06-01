import {
	getAzureBlobConnectionString,
	testAzureBlobStorageConnectivity,
} from '../../services/AzureBlobService';

export default async function validateConnectionStatus(req, res) {
	try {
		const connectionString = getAzureBlobConnectionString();
		await testAzureBlobStorageConnectivity();
		return res
			.status(200)
			.json({ message: 'Connection to external storage was successfull' });
	} catch (err) {
		console.log('error in api');
		return res.status(500).json({
			message: err.message,
		});
	}
}
