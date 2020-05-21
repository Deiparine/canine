import React from "react"
import { Link } from "gatsby"
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
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="start-schedule-box">
                  <div className="start-schedule-btn">
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
            <div className="questionnaire-prompt text-center p-3 p-md-5">
              <div className="d-block pt-4">
                <Link to="/questionnaire"></Link>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default VideoModal
