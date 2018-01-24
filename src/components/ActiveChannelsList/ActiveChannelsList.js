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
    <div>
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
      <Col
        id="active-channels-wrapper"
        className={
          (props.hideList ? 'hide-list ' : 'show-list ')
        }
        xs={12}
        sm={2}
      >
        <Panel
          bsStyle="info"
          id="active-channels-list"
        >
          <Panel.Heading className="height-5em">
            <Panel.Title className="height-100">
              <Row className="height-100">
                <Col xs={8} className="mid-align">
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
              <Row>
                {props.activeChannels.map(activeChannel => {
                  if (activeChannel.channel) {
                    return (
                      <Col xs={3} sm={12} className="panel-body-wrapper">
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
                          <small className="hidden-xs">{activeChannel.channel.status}</small>
                        </ListGroupItem>
                      </Col>
                    );
                  }
                  if (!activeChannel.channel) {
                    return (
                      <Col xs={3} sm={12} className="active-channel-wrapper">
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
                          <small className="hidden-xs">{activeChannel.status}</small>
                        </ListGroupItem>
                      </Col>
                    );
                  }

                  return null;
                })}
              </Row>
            </ListGroup>
          </Panel.Body>
        </Panel>
      </Col>
    </div>
  );
};

export default ActiveChannelsList;

ActiveChannelsList.propTypes = {
  activeChannels: PropTypes.array.isRequired,
  handleUnselectChannel: PropTypes.func,
  hideList: PropTypes.bool,
  handleHideChannelsList: PropTypes.func,
  handleRevealChannelsList: PropTypes.func,
  areSearchResultsDisplayed: PropTypes.bool,
  isSearching: PropTypes.bool
};
