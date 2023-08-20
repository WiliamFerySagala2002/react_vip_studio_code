import React, { Fragment } from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    this.setState({ count: 10 })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    return (
      <Fragment>
        <div className="flex items-center gap-3 p-2">
          <h1>{this.state.count}</h1>
          <button
            className=" text-white bg-black px-3 py-1 rounded text-2xl"
            onClick={() => this.setState({ count: this.state.count + 1 })}>
            +
          </button>
        </div>
      </Fragment>
    )
  }
}

export default Counter
