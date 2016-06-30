'use strict';
import 'channel-list.scss';
import Channel from 'Channel/Channel';
import ChannelFolder from 'ChannelFolder/ChannelFolder';

export default class ChannelList extends React.Component {
	render() {
		let { additionalClassName, ChannelListItems } = this.props;

		ChannelListItems = ChannelListItems.map(
			( ChannelListItem, index ) => {
				if (Array.isArray(ChannelListItem)){
					return (
						<ChannelFolder
							key={index}
							additionalClassName="channel-list__item"
							ChannelFolderItems={ChannelListItem} />
					)
				}
				else {
					return (
						<Channel
							key={index}
							additionalClassName="channel-list__item"
							{...ChannelListItem} />
					)
				}
			});

		return (
			<div className={"channel-list " + additionalClassName}>
			     {ChannelListItems}
			</div>
		);
	}
};
