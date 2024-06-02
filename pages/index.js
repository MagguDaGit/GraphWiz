import React, { useEffect, useState } from 'react';
import D3Graph from '../common/D3/D3Graph.js';
import { confirmConnection } from '../services/ConfirmConnection.js';
import { sampleData } from '../common/D3/sampleData';
import { GraphContext } from '../contexts/GraphContext.js';

import Box from '@mui/material/Box';
import { useErrorBoundary } from 'react-error-boundary';

export default function Home() {
	const [nodeSearchInput, setNodeSearchInput] = useState('');
	const [nodeType, setNodeType] = useState('');
	const [suggestedNodes, setSuggestedNodes] = useState([]);
	const [focusNode, setFocusNode] = useState({});
	const { showBoundary } = useErrorBoundary();

	const initialContext = {
		searchInput: nodeSearchInput,
		setSearchInput: setNodeSearchInput,
		type: nodeType,
		setType: setNodeType,
		suggestedNodes,
		setSuggestedNodes,
		focusNode,
		setFocusNode,
	};

	useEffect(() => {
		const checkConnection = async () => {
			confirmConnection().catch((err) => {
				showBoundary(err);
			});
		};
		checkConnection();
	}, []);

	return (
		<Box
			sx={{
				height: '100vh', // Set height to fill entire viewport
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<GraphContext.Provider value={initialContext}>
				<D3Graph graphData={sampleData} />
			</GraphContext.Provider>
		</Box>
	);
}
