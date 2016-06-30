'use strict';

//require.enshure([], function () {
let {template} = require('App-template.jsx');
//},'jsx');

console.log(template);

const App = React.createClass({
	propTypes : {},
	getDefaultProps() {
		return {};
	},
	render() {
		console.log(this);
		return template(this.props);
	}
});

export default App;
//class App extends React.Component {
//	render() {
//		return template(props.title);
//	}
//}