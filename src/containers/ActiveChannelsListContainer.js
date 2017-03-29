import {connect} from 'react-redux';
import ActiveChannelsList from '../components/ActiveChannelsList/ActiveChannelsList';
import {
  unselectStream
} from '../actions/index';

const mapStateToProps = state => {
  return {
    activeChannels: state.twitchmore.activeChannelsList.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUnselectChannel: activeChannel => {
      dispatch(unselectStream(activeChannel));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveChannelsList);
