import React, { Component } from 'react';
import axios from 'axios';
import base from '../base';
import MovieList from './MovieList';
import SearchContent from './SearchContent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    state = {
        listMovies: {}
    };

    getMovieData(search, page) {
        const searchValue = search;
        const listMovies = {...this.state.listMovies };

        console.log(searchValue);

        axios.get('http://www.omdbapi.com/', {
            params: {
                s: searchValue,
                page: page
            }
        }).then(function(response) {
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
        if (Object.keys(this.state.listMovies).length > 0) {
            let listMovies = this.state.listMovies;

            return (
                <MuiThemeProvider>
                    <div>                
                        <SearchContent submitSearch={this.getMovieData.bind(this)} />
                        <MovieList list={listMovies} />
                    </div>
                </MuiThemeProvider>
            );
        }
        else {
            return (
                <MuiThemeProvider>
                    <div>
                        <SearchContent submitSearch={this.getMovieData.bind(this)} />              
                    </div>
                </MuiThemeProvider>
            );
        }
    }
}

export default App;