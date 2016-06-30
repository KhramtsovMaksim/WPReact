'use strict';
import ChannelManager from 'ChannelManager/ChannelManager';

export default class ChannelManagerContainer extends React.Component {
	render() {
		let { additionalClassName, ChannelListItems, actions } = this.props;
		console.log(actions);
		return (
			<ChannelManager
				addChannel={actions.addChannel}
				ChannelListItems={ChannelListItems}
				additionalClassName={additionalClassName}/>
		);
	}
};
