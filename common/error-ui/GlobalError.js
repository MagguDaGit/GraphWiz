import { Alert } from '@mui/material';
import { CrisisAlert } from '@mui/icons-material';
export default function GlobalError({ error, resetErrorBoundary }) {
	console.log(error);
	return (
		<>
			<body>
				<Alert
					icon={<CrisisAlert />}
					severity='error'
				>
					<h2>A critical error has occured </h2>
					<h2> Message: {error.message} </h2>
				</Alert>
			</body>
		</>
	);
}
