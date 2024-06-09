import { createContext } from 'react';
//TODO: remove these when api is up
export const initialNodes = [
	{
		id: '1',
		position: { x: 0, y: 0 },
		type: 'node-with-toolbar',
		data: { label: 'Node', id: 1 },
	},
];

const initialFlowContext = {
	initialNodes,
	setNodes: () => null,
	addNode: () => null,
	removeNode: () => null,
	editNode: () => null,
};

export const FlowContext = createContext(initialFlowContext);
