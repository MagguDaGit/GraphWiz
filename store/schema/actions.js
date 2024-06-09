export const ADD_NODE = 'ADD_NODE';
export const UPDATE_NODES = 'UPDATE_NODES';

export const addNode = (node) => ({
	type: ADD_NODE,
	payload: node,
});

export const updateNodes = (nodes) => ({
	type: UPDATE_NODES,
	payload: nodes,
});
