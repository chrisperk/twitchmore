import {connect} from 'react-redux';
import ChannelDisplaySpace from '../components/ChannelDisplaySpace/ChannelDisplaySpace';
import {
  unselectStream
} from '../actions/index';

const mapStateToProps = state => {
  return {
    activeChannels: state.twitchmore.activeChannelsList.items,
    isChannelsListDisplayed: state.twitchmore.activeChannelsList.hideList,
    areSearchResultsDisplayed: state.twitchmore.searchForm.showSearchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUnselectChannel: (activeChannel, activeChannels) => {
      dispatch(unselectStream(activeChannel, activeChannels));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDisplaySpace);
