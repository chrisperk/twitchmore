import React, {PropTypes} from 'react';
import {
  Row,
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
  Button,
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap';
import './ActiveChannelsList.css';

const title = 'Active Channels';
const hideListTooltip = (
  <Tooltip id="hide-list-tooltip">
    Hide Active channels
  </Tooltip>
);

const ActiveChannelsList = props => {
  return (
    <Col
      id="active-channels-wrapper"
      className={props.hideList ? 'hide-list' : 'show-list'}
      xs={12}
      sm={2}
    >
      <div id="show-list-wrapper">
        <Button
          bsStyle="info"
          id="show-list-button"
          style={{
            display:
              props.hideList && props.activeChannels.length > 0 ? 'block' :
              'none'
          }}
          onClick={event => props.handleRevealChannelsList(event)}
        >
          Show<br />Active<br />Channels
        </Button>
      </div>
      <Panel
        bsStyle="info"
        id="active-channels-list"
      >
        <Panel.Heading className="height-5em">
          <Panel.Title className="height-100">
            <Row className="height-100">
              <Col xs={8}>
                {title}
              </Col>
              <Col xs={4} className="mid-align">
                <OverlayTrigger
                  placement="top"
                  overlay={hideListTooltip}
                >
                  <div
                    className="pull-right"
                    onClick={event => props.handleHideChannelsList(event)}
                  >
                    <i
                      className="fa fa-eye-slash pull-right"
                      id="toggle-active-channels-visibility"
                    />
                  </div>
                </OverlayTrigger>
              </Col>
            </Row>
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
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
        </Panel.Body>
      </Panel>
    </Col>
  );
};

export default ActiveChannelsList;

ActiveChannelsList.propTypes = {
  activeChannels: PropTypes.array.isRequired,
  handleUnselectChannel: PropTypes.func,
  hideList: PropTypes.bool,
  handleHideChannelsList: PropTypes.func,
  handleRevealChannelsList: PropTypes.func
};
