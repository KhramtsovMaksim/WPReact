"use strict";
import {createStore} from 'redux'
import rootReducer from '../reducers/index'

export default function configureStore( ) {
	const store = createStore(rootReducer);

	if (module.hot){
		module.hot.accept('../reducers/index', () => {
			const nextRootReducer = require('../reducers/index');
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}