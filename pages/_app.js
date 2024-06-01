import { ErrorBoundary } from 'react-error-boundary';
import DefaultFallback from '../common/error-ui/DefaultFallback';
import GlobalError from './GlobalError';

function App({ Component, pageProps }) {
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
			<Component {...pageProps} />
		</ErrorBoundary>
	);
}

export default App;
