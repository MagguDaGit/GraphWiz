import { createContext } from 'react';

const DEFAULT_GRAPH_CONTEXT = {
	searchInput: 'test',
	setSearchInput: () => null,
	type: '',
	setType: () => null,
	suggestedNodes: [],
	setSuggestedNodes: () => null,
	focusNode: null,
	setFocusNode: () => null,
};

export const GraphContext = createContext(DEFAULT_GRAPH_CONTEXT);
