'use strict';
import 'app.scss';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import AccountList from 'AccountList/AccountList';
import ChannelManagerContainer from 'ChannelManagerContainer/ChannelManagerContainer';
import * as ChannelManagerContainerActions from 'ChannelManagerContainer/Actions';
console.log(ChannelManagerContainerActions);

class App extends React.Component {
	render() {
		let { accounts, items } = this.props;
		console.log(this.props);
		return (
			<div
				className="app theme">
				<AccountList
					accounts={accounts}
					additionalClassName="app__item"/>
				<ChannelManagerContainer
					actions={this.props.ChannelManagerContainerActions}
					ChannelListItems={items}
					additionalClassName="app__item"/>
			</div>
		);
	}
}
function mapStateToProps( state ) {
	return {
		accounts : state.accounts,
		items    : state.channel
	}
}
function mapDispatchToProps( dispatch ) {
	return {
		ChannelManagerContainerActions : bindActionCreators(ChannelManagerContainerActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);