import React, {PropTypes} from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import './ChannelDisplaySpace.css';

const ChannelDisplaySpace = props => {
  if (props.activeChannels.length === 1) {
    return (
      <Col
        id="channel-display-wrapper"
        sm={props.isChannelsListDisplayed ? 12 : 10}
      >
        <Row
          id="channel-display-space"
          className={
            props.areSearchResultsDisplayed ?
              'margin-top-115px' :
              ''
          }
        >
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <Col key={activeChannel._id} className="channel-display" sm={12}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.channel.display_name}`}
                    height={props.areSearchResultsDisplayed ?
                      window.innerHeight - 186 + 'px' :
                      window.innerHeight - 50 + 'px'}
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
                <Col key={activeChannel._id} className="channel-display" sm={12}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.display_name}`}
                    height={props.areSearchResultsDisplayed ?
                      window.innerHeight - 186 + 'px' :
                      window.innerHeight - 50 + 'px'}
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
      <Col
        id="channel-display-wrapper"
        sm={props.isChannelsListDisplayed ? 12 : 10}
      >
        <Row
          id="channel-display-space"
          className={
            props.areSearchResultsDisplayed ?
              'margin-top-115px' :
              ''
          }
        >
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <Col className="channel-display" sm={12} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.channel.display_name}`}
                    height={props.areSearchResultsDisplayed ?
                      window.innerHeight / 2 - 93 + 'px' :
                      window.innerHeight / 2 - 26 + 'px'}
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
                <Col className="channel-display" sm={12} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.display_name}`}
                    height={props.areSearchResultsDisplayed ?
                      window.innerHeight / 2 - 93 + 'px' :
                      window.innerHeight / 2 - 26 + 'px'}
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
      <Col
        id="channel-display-wrapper"
        sm={props.isChannelsListDisplayed ? 12 : 10}
      >
        <Row
          id="channel-display-space"
          className={
            props.areSearchResultsDisplayed ?
              'margin-top-115px' :
              ''
          }
        >
          {
            props.activeChannels[0].channel ?
              <Col className="channel-display" sm={12} key={props.activeChannels[0]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[0].channel.display_name}`}
                  height={props.areSearchResultsDisplayed ?
                    window.innerHeight / 2 - 93 + 'px' :
                    window.innerHeight / 2 - 26 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col> :
              <Col className="channel-display" sm={12} key={props.activeChannels[0]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[0].display_name}`}
                  height={props.areSearchResultsDisplayed ?
                    window.innerHeight / 2 - 93 + 'px' :
                    window.innerHeight / 2 - 26 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col>
          }
          {
            props.activeChannels[1].channel ?
              <Col className="channel-display" sm={6} key={props.activeChannels[1]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[1].channel.display_name}`}
                  height={props.areSearchResultsDisplayed ?
                    window.innerHeight / 2 - 93 + 'px' :
                    window.innerHeight / 2 - 26 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col> :
              <Col className="channel-display" sm={6} key={props.activeChannels[1]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[1].display_name}`}
                  height={props.areSearchResultsDisplayed ?
                    window.innerHeight / 2 - 93 + 'px' :
                    window.innerHeight / 2 - 26 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col>
          }
          {
            props.activeChannels[2].channel ?
              <Col className="channel-display" sm={6} key={props.activeChannels[2]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[2].channel.display_name}`}
                  height={props.areSearchResultsDisplayed ?
                    window.innerHeight / 2 - 93 + 'px' :
                    window.innerHeight / 2 - 26 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col> :
              <Col className="channel-display" sm={6} key={props.activeChannels[2]._id}>
                <iframe
                  src={`http://player.twitch.tv/?channel=${props.activeChannels[2].display_name}`}
                  height={props.areSearchResultsDisplayed ?
                    window.innerHeight / 2 - 93 + 'px' :
                    window.innerHeight / 2 - 26 + 'px'}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen="true"
                />
              </Col>
            }
        </Row>
      </Col>
    );
  }

  if (props.activeChannels.length === 4) {
    return (
      <Col
        id="channel-display-wrapper"
        sm={props.isChannelsListDisplayed ? 12 : 10}
      >
        <Row
          id="channel-display-space"
          className={
            props.areSearchResultsDisplayed ?
              'margin-top-115px' :
              ''
          }
        >
          {props.activeChannels.map(activeChannel => {
            if (activeChannel.channel) {
              return (
                <Col className="channel-display" sm={6} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.channel.display_name}`}
                    height={props.areSearchResultsDisplayed ?
                      window.innerHeight / 2 - 93 + 'px' :
                      window.innerHeight / 2 - 26 + 'px'}
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
                <Col className="channel-display" sm={6} key={activeChannel._id}>
                  <iframe
                    src={`http://player.twitch.tv/?channel=${activeChannel.display_name}`}
                    height={props.areSearchResultsDisplayed ?
                      window.innerHeight / 2 - 93 + 'px' :
                      window.innerHeight / 2 - 26 + 'px'}
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
  activeChannels: PropTypes.array,
  isChannelsListDisplayed: PropTypes.bool,
  areSearchResultsDisplayed: PropTypes.bool
};
