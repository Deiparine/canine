import React from "react"
import { Modal, Button } from "react-bootstrap"

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
    // console.log(this.props.location.pathname)
    const iframe = [
      {
        id: 0,
        url: "/acl-tears",
        iframeSrc: "https://player.vimeo.com/video/440718705",
      },
      {
        id: 1,
        url: "/hip-dysplasia",
        iframeSrc: "https://player.vimeo.com/video/440730449",
      },
      {
        id: 2,
        url: "/",
        iframeSrc: "https://player.vimeo.com/video/440735813",
      },
      {
        id: 3,
        url: "/medial-patella-luxation",
        iframeSrc: "https://player.vimeo.com/video/440736682",
      },
      {
        id: 5,
        url: "/total-hip-replacement",
        iframeSrc: "https://player.vimeo.com/video/440738249",
      },
      {
        id: 6,
        url: "/tplo",
        iframeSrc: "https://player.vimeo.com/video/440744249",
      },
    ]
    const pageIframeHero = iframe.filter(
      item => item.url === this.props.location.pathname
    )
    console.log(pageIframeHero.length)
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
          dialogClassName="modal-600 video-wrap-img"
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
                {pageIframeHero.length !== 0 ? (
                  <iframe
                    title="vimeo-player"
                    src={pageIframeHero[0].iframeSrc}
                    style={{ width: "100%", height: "500px" }}
                    frameborder="0"
                    allowfullscreen
                    title="Hero videos"
                  ></iframe>
                ) : (
                  <img
                    onClick={this.handleShow}
                    src={this.props.videoImg}
                    alt="video"
                    className="w-100"
                  />
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default VideoModal
