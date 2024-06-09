import { createStore } from 'redux';
import { Provider } from 'react-redux';
import nodesReducer from './reducer';

const store = createStore(nodesReducer);

const StoreProvider = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

export default StoreProvider;
