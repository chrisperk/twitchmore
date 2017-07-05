import {connect} from 'react-redux';
import ActiveChannelsList from '../components/ActiveChannelsList/ActiveChannelsList';
import {
  unselectStream,
  hideChannelsList
} from '../actions/index';

const mapStateToProps = state => {
  return {
    activeChannels: state.twitchmore.activeChannelsList.items,
    hideList: state.twitchmore.activeChannelsList.hideList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUnselectChannel: (activeChannel, activeChannels) => {
      dispatch(unselectStream(activeChannel, activeChannels));
    },
    handleHideChannelsList: () => {
      dispatch(hideChannelsList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveChannelsList);
