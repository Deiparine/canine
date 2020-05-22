import React from "react"
import { Link } from "gatsby"

class knowledgeSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: this.props.data,
      value: "",
      show: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    if (event.target.value.length !== 0) {
      this.setState({ value: event.target.value, show: true })
    } else {
      this.setState({ value: "", show: false })
    }
  }

  render() {
    const style = {
      position: 'absolute'
    }
    const { posts } = this.state
    const post = posts.edges.filter(({ node }) => {
      return node.title.toLowerCase().includes(this.state.value)
    })
    console.log(this.state.value)
    return (
      <>
         <input
            className="form-control"
            placeholder="search here"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className={`result ${this.state.show ? "d-block" : "d-none"}`} style={style}>
            <ul className="list-unstyled text-left mb-0">
              {post.map((data, index) => {
                return (
                  <li><Link to={data.node.path}>{data.node.title}</Link></li>
                )
              })}
            </ul>
          </div>
      </>
    )
  }
}

export default knowledgeSearch