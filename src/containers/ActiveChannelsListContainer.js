import {connect} from 'react-redux';
import ActiveChannelsList from '../components/ActiveChannelsList/ActiveChannelsList';
import {
  unselectStream,
  hideChannelsList,
  revealChannelsList
} from '../actions/index';

const mapStateToProps = state => {
  return {
    activeChannels: state.twitchmore.activeChannelsList.items,
    hideList: state.twitchmore.activeChannelsList.hideList,
    isSearching: state.twitchmore.searchForm.searching,
    areSearchResultsDisplayed: state.twitchmore.searchForm.showSearchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUnselectChannel: (activeChannel, activeChannels) => {
      dispatch(unselectStream(activeChannel, activeChannels));
    },
    handleHideChannelsList: () => {
      dispatch(hideChannelsList());
    },
    handleRevealChannelsList: () => {
      dispatch(revealChannelsList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveChannelsList);
