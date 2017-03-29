import React, {PropTypes} from 'react';
import {
  Row,
  Col,
  // Button,
  // ListGroup,
  // ListGroupItem
} from 'react-bootstrap';
import './ChannelDisplaySpace.css';

const ChannelDisplaySpace = props => {
  if (props.activeChannels.length === 1) {
    return (
      <Col md={8}>
        <Row className="channel-display-space">
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <Col key={activeChannel._id} className="channel-display" md={12}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.channel.display_name}`}
                    height="750px"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true"
                  />
                </Col>
              );
            }

            if (!activeChannel.channel) {
              return (
                <Col key={activeChannel._id} className="channel-display" md={12}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.display_name}`}
                    height="750px"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true"
                  />
                </Col>
              );
            }

            return null;
          })}
        </Row>
      </Col>
    );
  }

  if (props.activeChannels.length === 2) {
    return (
      <Col md={8}>
        <Row className="channel-display-space">
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <Col className="channel-display" md={12} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.channel.display_name}`}
                    height="375px"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true"
                  />
                </Col>
              );
            }

            if (!activeChannel.channel) {
              return (
                <Col className="channel-display" md={12} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.display_name}`}
                    height="375px"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true"
                  />
                </Col>
              );
            }

            return null;
          })}
        </Row>
      </Col>
    );
  }

  if (props.activeChannels.length === 3) {
    return (
      <Col md={8}>
        <Row className="channel-display-space">
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <Col className="channel-display" md={12} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.channel.display_name}`}
                    height="250px"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true"
                  />
                </Col>
              );
            }
            if (!activeChannel.channel) {
              return (
                <Col className="channel-display" md={12} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.display_name}`}
                    height="250px"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true"
                  />
                </Col>
              );
            }

            return null;
          })}
        </Row>
      </Col>
    );
  }

  if (props.activeChannels.length === 4) {
    return (
      <Col md={8}>
        <Row className="channel-display-space">
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <Col className="channel-display" md={6} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.channel.display_name}`}
                    height="375px"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true"
                  />
                </Col>
              );
            }

            if (!activeChannel.channel) {
              return (
                <Col className="channel-display" md={6} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.display_name}`}
                    height="375px"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true"
                  />
                </Col>
              );
            }

            return null;
          })}
        </Row>
      </Col>
    );
  }

  return null;
};

export default ChannelDisplaySpace;

ChannelDisplaySpace.propTypes = {
  activeChannels: PropTypes.array
};
