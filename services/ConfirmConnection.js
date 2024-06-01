//TODO: Call this on initial load to confirm connection to external data resource
export const confirmConnection = async () => {
	return fetch('/api/blob-connection')
		.then(async (res) => {
			const data = await res.json();
			console.log(data);
			if (data.status !== 200) throw new Error(data.message);
			return true;
		})
		.catch((err) => {
			console.log('caught error? ');
			throw err;
		});
};
