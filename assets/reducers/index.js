"use strict";

import { combineReducers } from 'redux';
import channel from 'ChannelManagerContainer/Reducer';
import accounts from 'accounts';

export default combineReducers(
	{
		channel,
		accounts
	}
)