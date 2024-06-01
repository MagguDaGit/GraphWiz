import { ErrorBoundary } from 'react-error-boundary';

function App({ Component, pageProps }) {
	return (
		<ErrorBoundary fallback={<p>Whoops</p>}>
			<Component {...pageProps} />
		</ErrorBoundary>
	);
}

export default App;
