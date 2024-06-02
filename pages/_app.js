import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalError from '../common/error-ui/GlobalError';

import Drawer from '@mui/material/Drawer';
import GraphMenuButton from '../common/menus/GraphMenuButton.js';
import GraphSidePanel from '../common/menus/GraphSidePanel.js';

function App({ Component, pageProps }) {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const sidePanelComponents = (
		<>
			<GraphMenuButton toggleDrawer={toggleDrawer} />

			<Drawer
				open={open}
				onClose={toggleDrawer(false)}
			>
				<GraphSidePanel toggleDrawer={toggleDrawer} />
			</Drawer>
		</>
	);

	return (
		<ErrorBoundary
			fallbackRender={({ error, resetErrorBoundary }) => (
				<GlobalError
					error={error}
					resetErrorBoundary={resetErrorBoundary}
				/>
			)}
			onReset={() => null}
		>
			{sidePanelComponents}
			<Component {...pageProps} />
		</ErrorBoundary>
	);
}

export default App;
