import React, { useState } from 'react';
import D3Graph from './D3/D3Graph';
import { sampleData } from './D3/sampleData';
import { GraphContext } from '../contexts/GraphContext.js';
import { Box, Container } from '@mui/material';

export default function Home() {
	const [nodeSearchInput, setNodeSearchInput] = useState('');
	const [nodeType, setNodeType] = useState('');
	const [suggestedNodes, setSuggestedNodes] = useState([]);
	const [focusNode, setFocusNode] = useState({});
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

	return (
		<Box
			sx={{
				height: '90vh', // Set height to fill entire viewport
				display: 'flex',
				flexDirection: 'column', // Ensure children fill the height
			}}
		>
			<GraphContext.Provider value={initialContext}>
				<D3Graph graphData={sampleData} />
			</GraphContext.Provider>
		</Box>
	);
}
