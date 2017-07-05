import React, {PropTypes} from 'react';
import {
  Col,
  Panel,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import './ActiveChannelsList.css';

const title = 'Active Channels';

const ActiveChannelsList = props => {
  return (
    <Col
      md={2}
      className="pull-right"
      style={{display: props.hideList ? 'none' : 'block'}}
    >
      <Panel header={title} bsStyle="success" className="active-channels-list">
        <i
          className="fa fa-eye-slash"
          id="toggle-active-channels-visibility"
          onClick={event => props.handleHideChannelsList(event)}
        />
        <ListGroup>
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <ListGroupItem
                  className="active-channel"
                  key={activeChannel._id}
                  onClick={event =>
                    props.handleUnselectChannel(activeChannel, props.activeChannels, event)
                  }
                >
                  <div className="image-cropper">
                    <img src={activeChannel.preview.medium} alt="avatar" />
                  </div>
                  <p>{activeChannel.channel.display_name}</p>
                  <p>{activeChannel.game}</p>
                  <small>{activeChannel.channel.status}</small>
                </ListGroupItem>
              );
            }
            if (!activeChannel.channel) {
              return (
                <ListGroupItem
                  className="active-channel"
                  key={activeChannel._id}
                  onClick={event => props.handleUnselectChannel(activeChannel, event)}
                >
                  <div className="image-cropper">
                    <img src={activeChannel.video_banner} alt="avatar" />
                  </div>
                  <p>{activeChannel.display_name}</p>
                  <p>{activeChannel.game}</p>
                  <small>{activeChannel.status}</small>
                </ListGroupItem>
              );
            }

            return null;
          })}
        </ListGroup>
      </Panel>
    </Col>
  );
};

export default ActiveChannelsList;

ActiveChannelsList.propTypes = {
  activeChannels: PropTypes.array.isRequired,
  handleUnselectChannel: PropTypes.func,
  hideList: PropTypes.bool,
  handleHideChannelsList: PropTypes.func
};
