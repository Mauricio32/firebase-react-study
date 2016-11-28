import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import '../styles/SearchContent.scss';

class SearchContent extends Component {    
    handleChange = (event) => {
      console.log(this);
      this.props.submitSearch(event.target.value, 1);
    };

    render() {
        return (
            <div className="search-content">
                <TextField hintText="Nome do conteúdo" onBlur={this.handleChange.bind(this)} />                            
            </div>
        );
    }
}

export default SearchContent;