import * as React from "react";

class Paper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.title}
        {this.props.publishedAt}
        {this.props.doi}
      </div>
    );
  }
}

export default Paper;
