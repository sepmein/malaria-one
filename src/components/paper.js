import * as React from "react";

class Paper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>title: {this.props.title}</p>
        <p>published: {this.props.publishedAt}</p>
        <p>doi: {this.props.doi}</p>
      </div>
    );
  }
}

export default Paper;
