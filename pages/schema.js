import { Box } from '@mui/material';
import FlowSchema from '../common/flow/FlowSchema';
import Flow from '../common/flow/Flow';

export default function Schema() {
	return (
		<Box
			sx={{
				height: '100vh', // Set height to fill (Almost) entire viewport
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Flow />
		</Box>
	);
}
