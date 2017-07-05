import {connect} from 'react-redux';
import ChannelDisplaySpace from '../components/ChannelDisplaySpace/ChannelDisplaySpace';

const mapStateToProps = state => {
  return {
    activeChannels: state.twitchmore.activeChannelsList.items,
    isChannelsListDisplayed: state.twitchmore.activeChannelsList.hideList,
    areSearchResultsDisplayed: state.twitchmore.searchForm.showSearchResults
  };
};

export default connect(
  mapStateToProps
)(ChannelDisplaySpace);
