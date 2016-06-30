'use strict';

class Chanel extends React.Component {
	static propTypes = {
		className : React.PropTypes.string,
		name      : React.PropTypes.string.isRequired
	};

	render() {
		let { additionalClassName, name } = this.props;
		return (
			<div className={"channel " + additionalClassName}>
				<h2>{name}</h2>
			</div>
		)
	}
}

export default Chanel;