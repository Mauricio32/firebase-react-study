import React, {Component} from 'react';

class Movie extends Component {
  render() {
    console.log(this.props.content);

    return (
      <li>      
        {this.props.content.name} - {this.props.content.type}
      </li>
    );
  }
}

export default Movie;