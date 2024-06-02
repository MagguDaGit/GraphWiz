import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { PiGraph } from 'react-icons/pi';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { GRAPH, NAVIGATION_OPTIONS, SCHEMA } from './constants';
import Link from 'next/link';

const GraphSidePanel = ({ toggleDrawer }) => {
	const mapOptionWithIcon = (optionText) => {
		switch (optionText) {
			case GRAPH:
				return <PiGraph size={'1.75em'} />;
			case SCHEMA:
				return <DocumentScannerIcon />;
			default:
				return <QuestionMarkIcon />;
		}
	};

	const getNavigationFromOption = (optionText) => {
		switch (optionText) {
			case GRAPH: {
				return '/';
			}
			case SCHEMA:
				return '/schema';
			default:
				return '/';
		}
	};

	return (
		<Box
			sx={{ width: 250 }}
			role='presentation'
			onClick={toggleDrawer(false)}
		>
			<List>
				{NAVIGATION_OPTIONS.map((text, index) => (
					<Link href={getNavigationFromOption(text)}>
						<ListItem
							key={text}
							disablePadding
						>
							<ListItemButton>
								<ListItemIcon>{mapOptionWithIcon(text)}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
		</Box>
	);
};
export default GraphSidePanel;
