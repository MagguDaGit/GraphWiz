//TODO: Call this on initial load to confirm connection to external data resource
export const confirmConnection = async () => {
	return fetch('/api/blob-connection')
		.then(async (res) => {
			if (res.status !== 200)
				throw Error('Connection to external data could not be established');
			return true;
		})
		.catch((err) => {
			throw err;
		});
};
