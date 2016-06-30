'use strict';
require("core.scss");
import App from 'App/App';
import {Provider} from 'react-redux';
import configureStore from 'store/configureStore'

let defaultStore = {
	accounts : [{ name : 'acc-QWE_default' }],
	items    : [
		{ name : 'RSS-qwe_default' },
		[
			{ name : 'sub-RSS-zxc_default' }
		]
	]
};
const store      = configureStore();
console.log(store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
