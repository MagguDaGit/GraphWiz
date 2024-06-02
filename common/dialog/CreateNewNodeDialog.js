import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Input } from '@mui/material';

export default function CreateNewNodeDialog({ open, setOpen, nodes, addNode }) {
	const handleClose = () => {
		setOpen(false);
	};
	const [nodeName, setNodeName] = React.useState('');

	const handleCreate = () => {
		let newId = 0;
		nodes.forEach((node) => {
			if (node.id === newId) {
				newId += 1;
			}
		});
		const newNode = {
			id: newId.toString(),
			position: { x: 100, y: 100 },
			type: 'node-with-toolbar',
			data: { label: nodeName },
		};
		addNode(newNode);
		handleClose();
	};

	return (
		<React.Fragment>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'Create New Node'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Set the name of the new node
					</DialogContentText>
					<Input
						type='text'
						onChange={(e) => setNodeName(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						onClick={handleCreate}
						autoFocus
					>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
