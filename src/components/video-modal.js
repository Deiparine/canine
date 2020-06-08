import React from "react"
import { Modal, Button } from "react-bootstrap"

class VideoModal extends React.Component {
  constructor(props, context, location) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false,
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  render() {
    return (
      <div>
        <div className="video-modal-btn">
          {this.props.videoImg ? (
            <img
              onClick={this.handleShow}
              src={this.props.videoImg}
              alt="video"
              className="video-img img-fluid"
            />
          ) : null}
        </div>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          dialogClassName="modal-600"
          centered
        >
          <Modal.Body>
            <Button
              className="close-btn"
              title="Close"
              onClick={this.handleClose}
            >
              <i className="fa fa-times" />
            </Button>
            <div className="text-center">
              <div className="">
                <img
                  onClick={this.handleShow}
                  src={this.props.videoImg}
                  alt="video"
                  className="w-100"
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default VideoModal
