import React, { useState } from 'react';
import ReactFlow, {
	ReactFlowProvider,
	Panel,
	useNodesState,
	Controls,
} from 'reactflow';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NodeWithToolbar from './NodeWithToolbar';

import 'reactflow/dist/style.css';
import CreateNewNodeDialog from '../dialog/CreateNewNodeDialog';
//TODO: Remove the inital data types when integrated fully with blob storage
const initialNodes = [
	{
		id: '1',
		position: { x: 0, y: 0 },
		type: 'node-with-toolbar',
		data: { label: 'Node' },
	},
];

const nodeTypes = {
	'node-with-toolbar': NodeWithToolbar,
};

function Flow() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [openCreateNodeDialog, setOpenCreateNodeDialog] = useState(false);
	const addNode = (node) => {
		const nodeList = nodes;
		nodeList.push(node);
		setNodes(nodeList);
	};

	return (
		<>
			<ReactFlowProvider>
				<ReactFlow
					nodes={nodes}
					onNodesChange={onNodesChange}
					nodeTypes={nodeTypes}
					fitView
					preventScrolling={false}
				>
					<Panel
						style={{
							marginTop: '10vh',
						}}
					>
						<Button
							onClick={() => setOpenCreateNodeDialog(true)}
							variant='contained'
						>
							<AddIcon /> Add Node
						</Button>
					</Panel>
				</ReactFlow>
				<Controls />
			</ReactFlowProvider>
			<CreateNewNodeDialog
				open={openCreateNodeDialog}
				setOpen={setOpenCreateNodeDialog}
				nodes={nodes}
				addNode={addNode}
			/>
		</>
	);
}

export default Flow;
