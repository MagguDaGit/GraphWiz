import { ADD_NODE, UPDATE_NODES } from './actions';

//TODO: Replace this with actual data at some point
const initialState = {
	nodes: [
		{
			id: '1',
			position: { x: 0, y: 0 },
			type: 'node-with-toolbar',
			data: { label: 'Node', toolbarPosition: { x: 0, y: 0 } },
		},
	],
};

const nodesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NODE:
			return {
				...state,
				nodes: [...state.nodes, action.payload],
			};
		case UPDATE_NODES:
			return {
				...state,
				nodes: action.payload,
			};
		default:
			return state;
	}
};

export default nodesReducer;
