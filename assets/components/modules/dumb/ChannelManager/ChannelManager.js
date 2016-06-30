'use strict';
import 'channel-manager.scss';
import ChannelList from 'ChannelList/ChannelList';
import ChannelAdd from 'ChannelAdd/ChannelAdd';

export default class ChannelManager extends React.Component {
	render() {
		let { additionalClassName, ChannelListItems, addChannel } = this.props;
		console.log(addChannel);
		return (
			<div className={"channel-manager " + additionalClassName}>
				<ChannelList
					additionalClassName="channel-manager__item"
					ChannelListItems={ChannelListItems}
				/>
				<ChannelAdd
					additionalClassName="channel-manager__item"
					addNewItemToList={addChannel}
				/>
			</div>
		);
	}
};
