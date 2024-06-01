import { Alert } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

export const DefaultFallback = ({ error, resetErrorBoundary }) => {
	console.log(error);
	return <Alert severity='error'>This is an error Alert.</Alert>;
};
