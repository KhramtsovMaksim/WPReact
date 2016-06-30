'use strict';
import * as Actions from 'Constans';

export function addChannel( channel ) {
	return {
		type    : Actions.ADD_CHANNEL,
		payload : channel
	}
}