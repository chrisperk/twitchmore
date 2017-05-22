import React, {PropTypes} from 'react';
import {
  // Row,
  Col,
  // Button,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import './ActiveChannelsList.css';

const ActiveChannelsList = props => {
  return (
    <Col md={2} className="pull-right">
      <ListGroup className="active-channels-list">
        <h1>
          Active Channels
        </h1>
        {props.activeChannels.map(activeChannel => {
          if (activeChannel.channel) {
            return (
              <ListGroupItem
                className="active-channel"
                key={activeChannel._id}
                onClick={event => props.handleUnselectChannel(activeChannel, event)}
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
    </Col>
  );
};

export default ActiveChannelsList;

ActiveChannelsList.propTypes = {
  activeChannels: PropTypes.array.isRequired,
  handleUnselectChannel: PropTypes.func
};
