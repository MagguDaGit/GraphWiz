import { Box, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';
const GraphMenuButton = ({ toggleDrawer }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				marginBottom: '16px',
			}}
		>
			<Button onClick={toggleDrawer(true)}>
				<Menu
					sx={{
						fontSize: '4rem',
					}}
				/>
			</Button>
		</Box>
	);
};
export default GraphMenuButton;
