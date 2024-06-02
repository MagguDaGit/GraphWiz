import { Box, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';
const GraphMenuButton = ({ toggleDrawer }) => {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				margin: '16px',
				zIndex: 1000,
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
