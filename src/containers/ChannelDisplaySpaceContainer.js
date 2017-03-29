import {connect} from 'react-redux';
import ChannelDisplaySpace from '../components/ChannelDisplaySpace/ChannelDisplaySpace';

const mapStateToProps = state => {
  return {
    activeChannels: state.twitchmore.activeChannelsList.items
  };
};

export default connect(
  mapStateToProps
)(ChannelDisplaySpace);
