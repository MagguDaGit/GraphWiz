import { Box, Button } from '@mui/material';
import { NodeToolbar } from 'reactflow';
import EditNodeDialog from '../dialog/EditNodeDialog';
import { useContext, useState } from 'react';
import { FlowContext } from './FlowContext';
export default function NodeWithToolbar({ data }) {
	const { editNode } = useContext(FlowContext);
	const [openEditDialog, setOpenEditDialog] = useState(false);
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
						onClick={() => setOpenEditDialog(true)}
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

			<EditNodeDialog
				open={openEditDialog}
				setOpen={setOpenEditDialog}
				editNode={editNode}
				data={data}
			/>
		</>
	);
}
