import React, {Component} from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {
    console.log(this.props.list);

    return (
      <div>
        <ul>
          {
            Object.keys(this.props.list).map((movieId) => {
              return <Movie content={this.props.list[movieId]} key={movieId} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default MovieList;