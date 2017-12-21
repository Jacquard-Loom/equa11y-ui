import React, { Component } from "react";

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      isDropped: false,
    };
  }

  handleHover = () => {
    this.setState(prevState => ({ isDropped: true }));
  };

  handleClick = () => {
    this.setState(prevState => ({ isDropped: !prevState.isDropped }));
  };

  render() {
    const { id, isHoverable, title, children } = this.props;
    const { isDropped } = this.state;

    return (
      <div>
        <button
          className="Button"
          id={id}
          onFocus={isHoverable ? this.handleHover : null}
          onMouseOver={isHoverable ? this.handleHover : null}
          onClick={this.handleClick}
        >
          {this.props.title}
        </button>
        {isDropped && (
          <ul style={{}}>
            {React.Children.map(children, child => <li>{child}</li>)}
          </ul>
        )}
      </div>
    );
  }
}

export { Dropdown };
