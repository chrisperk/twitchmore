import React, {PropTypes} from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import './ChannelDisplaySpace.css';

const ChannelDisplaySpace = props => {
  if (props.activeChannels.length === 1) {
    return (
      <Col md={10}>
        <Row className="channel-display-space">
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <Col key={activeChannel._id} className="channel-display" md={12}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.channel.display_name}`}
                    height={window.innerHeight - 50 + 'px'}
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
                    height={window.innerHeight - 50 + 'px'}
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
      <Col md={10}>
        <Row className="channel-display-space">
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <Col className="channel-display" md={12} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.channel.display_name}`}
                    height={window.innerHeight / 2 - 50 + 'px'}
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
                    height={window.innerHeight / 2 - 50 + 'px'}
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
      <Col md={10}>
        <Row className="channel-display-space">
          {
            props.activeChannels[0].channel ?
              <Col className="channel-display" md={12} key={props.activeChannels[0]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[0].channel.display_name}`}
                  height={window.innerHeight / 2 - 50 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col> :
              <Col className="channel-display" md={12} key={props.activeChannels[0]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[0].display_name}`}
                  height={window.innerHeight / 2 - 50 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col>
          }
          {
            props.activeChannels[1].channel ?
              <Col className="channel-display" md={6} key={props.activeChannels[1]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[1].channel.display_name}`}
                  height={window.innerHeight / 2 - 50 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col> :
              <Col className="channel-display" md={6} key={props.activeChannels[1]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[1].display_name}`}
                  height={window.innerHeight / 2 - 50 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col>
          }
          {
            props.activeChannels[2].channel ?
              <Col className="channel-display" md={6} key={props.activeChannels[2]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[2].channel.display_name}`}
                  height={window.innerHeight / 2 - 50 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col> :
              <Col className="channel-display" md={6} key={props.activeChannels[2]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[2].display_name}`}
                  height={window.innerHeight / 2 - 50 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col>
            }
          }
        </Row>
      </Col>
    );
  }

  if (props.activeChannels.length === 4) {
    return (
      <Col md={10}>
        <Row className="channel-display-space">
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <Col className="channel-display" md={6} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.channel.display_name}`}
                    height={window.innerHeight / 2 - 50 + 'px'}
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
                    height={window.innerHeight / 2 - 50 + 'px'}
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
