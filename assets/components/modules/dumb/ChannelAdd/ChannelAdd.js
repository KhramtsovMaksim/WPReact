'use strict';
export default class ChannelAdd extends React.Component {
	state = {
		disabled : true
	};

	add = () => {
		this.props.addNewItemToList(ReactDOM.findDOMNode(this.refs.name).value)
	};

	ifEmptyDisableButton = ( e ) => {
		this.setState({ disabled : (e.target.value.trim() === '') });
	};

	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.name).focus();
	}

	render() {
		let { additionalClassName } = this.props;
		return (
			<div className={"channel-add " + additionalClassName}>
				<input
					ref="name"
					type="text"
					className="channel-add__field"
					onChange={this.ifEmptyDisableButton}
				/>
				<button
					ref="button"
					className="channel-add__btn"
					onClick={this.add}
					disabled={this.state.disabled}
				>Add
				</button>
			</div>
		);
	}
};
