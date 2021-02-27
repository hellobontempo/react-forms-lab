import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 280,
      message: ""
    };
  }

  countCharacters = event => {
    this.setState({
      maxChars: this.props.maxChars - event.target.value.length,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Character Count: {this.state.maxChars}</p>
        <input onChange={event => this.countCharacters(event)} type="text" name="message" id="message" value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
