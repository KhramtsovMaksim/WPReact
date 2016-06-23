'use strict';
import App from 'App/App';

let accounts = [{ name : 'qwe' }, { name : 'asd' }, { name : 'max' }];

ReactDOM.render(
	<App
		title={123}
		accounts={accounts}
		/>,
	document.getElementById('app')
);