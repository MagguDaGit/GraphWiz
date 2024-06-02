import { Box, Button } from '@mui/material';
import { NodeToolbar } from 'reactflow';
export default function NodeWithToolbar({ data }) {
	return (
		<>
			<NodeToolbar
				isVisible={data.forceToolbarVisible || undefined}
				position={data.toolbarPosition}
			>
				<Box
					display='flex'
					alignItems='center'
					gap={4}
				>
					<Button
						color='info'
						variant='contained'
					>
						Edit
					</Button>
					<Button
						color='text'
						variant='contained'
					>
						Link
					</Button>
					<Button
						color='error'
						variant='contained'
					>
						Delete
					</Button>
				</Box>
			</NodeToolbar>
			<div className='react-flow__node-default'>{data?.label}</div>
		</>
	);
}
