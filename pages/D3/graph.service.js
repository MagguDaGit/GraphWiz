export const findNode = (nodes, nodeName) => {
	return nodes.find((node) => {
		const isMatch =
			node.name.toLowerCase().trim(' ') === nodeName.toLowerCase().trim(' ');
		return isMatch;
	});
};

export const findNodes = (nodes, textInput) => {
	console.log(textInput);
	const searchText = textInput.toLowerCase().trim(' ');
	return nodes.filter(
		(node) =>
			node.name && node.name.toLowerCase().trim(' ').includes(searchText)
	);
};
