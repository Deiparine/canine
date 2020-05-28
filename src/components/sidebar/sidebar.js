import React from "react"
import SideBar from "react-sidebar"
// import { Motion, spring, presets } from "react-motion"
import Menu from "./menu"

class SideBarMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
      sidebarpullLeft: true,
      toggle: false,
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }
  onSetSidebarOpen(state) {
    this.setState({ sidebarOpen: state.open, toggle: !this.state.toggle })
  }
  toggleMenu() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
      toggle: !this.state.toggle,
    })
  }

  handleKeyDown = ev => {
    // check keys if you want
    if (ev.keyCode === 13) {
      this.focus()
    }
  }

  focus = () => this.ref.focus

  handleRef = component => {
    this.ref = component
  }

  render() {
    // const style = {
    // 	overflow: "visible",
    // 	cursor: "pointer",
    // 	// disable touch highlighting on devices
    // 	WebkitTapHighlightColor: "rgba(0,0,0,0)",
    // }
    return (
      <SideBar
        sidebar={
          <Menu /> // Menu list
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight={this.state.sidebarpullRight}
        styles={{
          sidebar: {
            background: "#fff",
            width: "300px",
            position: "fixed",
            zIndex: "99",
          },
          root: { position: "relative", overflow: "visible" },
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.65)", zIndex: 2 },
          content: {
            position: "relative",
            overflow: "visible",
            display: "inline-block",
            marginBottom: "-40px",
            cursor: "pointer",
          },
        }}
      >
        <h2 className="bm-burger-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56 56"
            style={{ enableBackground: "new 0 0 56 56", marginLeft: "-10px" }}
            width="50px"
            height="50px"
            className=""
            onClick={e => this.toggleMenu(e)}
            onKeyDown={e => this.handleKeyDown(e)}
          >
            <g>
              <g>
                <path
                  d="M40,16H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,16,40,16z"
                  data-original="#D8D8D8"
                  class="active-path"
                  data-old_color="#D8D8D8"
                  fill="#D8D8D8"
                  stroke="#D8D8D8"
                  stroke-width="5"
                />
                <path
                  d="M40,27H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,27,40,27z"
                  data-original="#D8D8D8"
                  class="active-path"
                  data-old_color="#D8D8D8"
                  fill="#D8D8D8"
                  stroke="#D8D8D8"
                  stroke-width="5"
                />
                <path
                  d="M40,38H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,38,40,38z"
                  data-original="#D8D8D8"
                  class="active-path"
                  data-old_color="#D8D8D8"
                  fill="#D8D8D8"
                  stroke="#D8D8D8"
                  stroke-width="5"
                />
              </g>
            </g>{" "}
          </svg>
        </h2>
      </SideBar>
    )
  }
}

export default SideBarMenu
