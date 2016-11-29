import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class MovieList extends Component {
  render() {
    return (
      <div styles={styles.root}>
        <GridList cellHeight={250} styles={styles.gridList} cols={5}>
          <Subheader>Lista de filmes adicionados</Subheader>
            {
              Object.keys(this.props.list).map((movieId) => {                     
                  return (
                    <GridTile title={this.props.list[movieId].name} subtitle={this.props.list[movieId].year} key={movieId}>
                      <img src={((this.props.list[movieId].image !== 'N/A') ? this.props.list[movieId].image : 'http://www.metalcuttingtools.eu/sites/default/files/default_images/thumbnail-default.jpg')} 
                           role='presentation' />
                    </GridTile>
                  )
              })
            }          
        </GridList>
      </div>
    );
  }
}

export default MovieList;