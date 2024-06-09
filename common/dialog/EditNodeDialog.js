import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Input } from '@mui/material';
import { FlowContext } from '../flow/FlowContext';

export default function EditNodeDialog({ open, setOpen, editNode, data }) {
	const [label, setLabel] = React.useState(data?.label);
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'Edit node'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Edit node name
					</DialogContentText>
					<Input
						type='text'
						value={label}
						onChange={(e) => setLabel(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						onClick={() => {
							editNode(data.id, label);
							handleClose();
						}}
						autoFocus
					>
						Edit
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
