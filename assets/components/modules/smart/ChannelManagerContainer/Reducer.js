'use strict';
import * as Actions from 'Constans';

const initialState = [
	{
		name : 'Аноним'
	}, {
		name : 'Аноним 23'
	}
];

export default function channel( state = initialState, action ) {
	switch ( action.type ) {
		case Actions.ADD_CHANNEL: {
			console.log(state);
			return [...state, {name:action.payload}];
		}
		default: {
			return state
		}
	}
}