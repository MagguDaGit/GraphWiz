import React, { useContext, useState } from 'react';
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
import { FlowContext } from './FlowContext';
import { initialNodes } from './FlowContext';

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

	const editNode = (nodeId, label) => {
		console.log(nodeId, label);
		const nodesCopy = nodes;
		nodesCopy.forEach((n) => {
			console.log('found!');
			if (n.data.id === nodeId) n.data.label = label;
		});
		setNodes(nodesCopy);
		console.log(nodesCopy);
	};

	const context = {
		nodes,
		setNodes,
		addNode,
		removeNode: () => null,
		editNode,
	};

	return (
		<>
			<FlowContext.Provider value={context}>
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
			</FlowContext.Provider>
		</>
	);
}

export default Flow;
