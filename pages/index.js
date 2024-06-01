import React, { useEffect, useState } from 'react';
import D3Graph from './D3/D3Graph';
import { confirmConnection } from '../services/ConfirmConnection.js';
import { sampleData } from './D3/sampleData';
import { GraphContext } from '../contexts/GraphContext.js';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import GraphMenuButton from './menus/GraphMenuButton.js';
import GraphSidePanel from './menus/GraphSidePanel.js';
import { useErrorBoundary } from 'react-error-boundary';

export default function Home() {
	const [nodeSearchInput, setNodeSearchInput] = useState('');
	const [nodeType, setNodeType] = useState('');
	const [suggestedNodes, setSuggestedNodes] = useState([]);
	const [focusNode, setFocusNode] = useState({});
	const [open, setOpen] = useState(false);
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

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	useEffect(() => {
		const checkConnection = async () => {
			confirmConnection().catch((err) => {
				showBoundary(err);
			});
		};
		checkConnection();
	}, []);

	const sidePanelComponents = (
		<>
			<GraphMenuButton toggleDrawer={toggleDrawer} />

			<Drawer
				open={open}
				onClose={toggleDrawer(false)}
			>
				<GraphSidePanel toggleDrawer={toggleDrawer} />
			</Drawer>
		</>
	);

	return (
		<Box
			sx={{
				height: '90vh', // Set height to fill (Almost) entire viewport
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<GraphContext.Provider value={initialContext}>
				{sidePanelComponents}
				<D3Graph graphData={sampleData} />
			</GraphContext.Provider>
		</Box>
	);
}
