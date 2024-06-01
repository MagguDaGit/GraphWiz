const { BlobServiceClient } = require('@azure/storage-blob');
const { v1: uuidv1 } = require('uuid');
require('dotenv').config();

export const getAzureBlobConnectionString = () => {
	const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
	if (!connectionString)
		throw new Error(
			'No Azure storage connection string was found! Make sure this is included in the .env file under the name: AZURE_STORAGE_CONNECTION_STRING'
		);
	else return connectionString;
};

const createClient = () => {
	return BlobServiceClient.fromConnectionString(
		process.env.AZURE_STORAGE_CONNECTION_STRING
	);
};

export const createContainer = async (name) => {
	const containerName = name + uuidv1();
	const containerClient = BlobServiceClient.getContainerClient(containerName);
	const createContainerResponse = await containerClient.create();
	console.log(
		`Container was created successfully.\n\trequestId:${createContainerResponse.requestId}\n\tURL: ${containerClient.url}`
	);
};

export const testAzureBlobStorageConnectivity = async () => {
	try {
		const containerClient = createClient();

		const containersIterator = containerClient.listContainers();
		const containers = [];
		for await (const container of containersIterator) {
			containers.push(container.name);
		}
	} catch (error) {
		throw Error('Could not connect to the azure blob container: ' + error);
	}
};
