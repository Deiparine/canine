import React from "react"
import { Modal, Button } from "react-bootstrap"
import video from "../images/dr-bauer-vid.png"

class VideoModal extends React.Component {
  constructor(props, context) {
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
        <section className="start-schedule-area">
          <div>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="video-modal-btn">
                  <img
                    onClick={this.handleShow}
                    src={video}
                    alt="video"
                    className="video-modal"
                    style={{ marginTop: "-100px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
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
                  src={video}
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
