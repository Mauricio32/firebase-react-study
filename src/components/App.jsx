import React, { Component } from 'react';
import axios from 'axios';
import base from '../base';

class App extends Component {
    state = {
        listMovies: {}
    };

    getMovieData(search, page) {
        const searchValue = search.movieSearch.value;
        const listMovies = {...this.state.listMovies };

        axios.get('http://www.omdbapi.com/', {
            params: {
                s: searchValue,
                page: page
            }
        }).then(function(response) {
            console.log(response.data.totalResults);
            response.data.Search.map((obj) => {
                listMovies[obj.imdbID] = {
                    name: obj.Title,
                    year: obj.Year,
                    image: obj.Poster,
                    type: obj.Type,
                    imdbID: obj.imdbID
                };
            });

            this.setState({
                listMovies
            })
        }.bind(this)).catch(function(error) {
            console.log(error);
        });
    }

    componentWillMount() {
        this.ref = base.syncState('desafio/listMovies', {
            context: this,
            state: 'listMovies'
        });
    }

    render() {
        return (
            <div>
                <input type="text" ref="movieSearch"></input>
                <button onClick={this.getMovieData.bind(this, this.refs, 2)}>Enviar</button>
            </div>
        );
    }
}

export default App;