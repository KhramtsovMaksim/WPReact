'use strict';
import ChannelList from 'ChannelList/ChannelList';

class ChannelFolder extends React.Component {
	static propTypes = {
		className          : React.PropTypes.string,
		ChannelFolderItems : React.PropTypes.array.isRequired
	};

	render() {
		let { additionalClassName, ChannelFolderItems } = this.props;

		return (
			<div className={"channel-folder " + additionalClassName}>
				<ChannelList
					additionalClassName="channel-list__item"
					ChannelListItems={ChannelFolderItems}
				/>
			</div>
		);
	}
}
export default ChannelFolder;
