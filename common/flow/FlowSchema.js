import { Button, Box, Menu, MenuItem } from '@mui/material';
import { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
	Controls,
	Background,
	Panel,
	applyNodeChanges,
	applyEdgeChanges,
	NodeToolbar,
	Position,
	useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import AddIcon from '@mui/icons-material/Add';

const initialNodes = [
	{
		id: '1',
		data: { label: 'Hello' },
		position: { x: 0, y: 0 },
		type: 'node-with-toolbar',
	},
	{
		id: '2',
		data: { label: 'Hello' },
		position: { x: 100, y: 100 },
		type: 'node-with-toolbar',
	},
];

const initialEdges = [
	{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
];

const nodeTypes = {
	'node-with-toolbar': NodeWithToolbar,
};

function NodeWithToolbar({ data }) {
	return (
		<>
			<NodeToolbar
				isVisible={data.forceToolbarVisible || undefined}
				position={data.toolbarPosition}
			>
				<button>cut</button>
				<button>copy</button>
				<button>paste</button>
			</NodeToolbar>
			<div className='react-flow__node-default'>{data?.label}</div>
		</>
	);
}

function FlowSchema() {
	const [edges, setEdges] = useState(initialEdges);

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

	const forceToolbarVisible = useCallback((enabled) =>
		setNodes((nodes) =>
			nodes.map((node) => ({
				...node,
				data: { ...node.data, forceToolbarVisible: enabled },
			}))
		)
	);
	const onEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[]
	);

	const memoizedNodes = useMemo(() => nodes, [nodes]);
	const memoizedEdges = useMemo(() => edges, [edges]);

	return (
		<>
			<div style={{ height: '100%' }}>
				<ReactFlow
					nodes={memoizedNodes}
					onNodesChange={onNodesChange}
					edges={memoizedEdges}
					onEdgesChange={onEdgesChange}
					fitView
				>
					<Panel
						style={{
							marginTop: '10vh',
						}}
					>
						<Button variant='contained'>
							<AddIcon /> Add Node
						</Button>
					</Panel>
					<Background />
					<Controls />
				</ReactFlow>
			</div>
		</>
	);
}

export default FlowSchema;
