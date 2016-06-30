'use strict';

export default class Account extends React.Component {
	render() {
		console.log('acc');
		let {additionalClassName} = this.props;
		return <div className={"account " + additionalClassName}>{this.props.name}</div>
	}
};