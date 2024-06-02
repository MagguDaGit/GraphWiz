export const sampleData = {
	nodes: [
		{
			id: 'A',
			type: 'project',
			size: 25,
			outgoingConnections: 1,
			incommingConnections: 0,
			color: 'pink',
			name: 'Project - A',
		},
		{
			id: 'B',
			type: 'project',
			size: 25,
			outgoingConnections: 1,
			incommingConnections: 1,
			color: 'lightblue',
			name: 'Project - B',
		},
		{
			id: 'C',
			type: 'project',
			size: 25,
			outgoingConnections: 0,
			incommingConnections: 1,
			color: 'lightgreen',
			name: 'Project - C',
		},
		// Add more nodes as needed
	],
	links: [
		{ source: 'A', target: 'B' },
		{ source: 'B', target: 'C' },
		// Add more links as needed
	],
};
