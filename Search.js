import React, { Component } from 'react';


class Search extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    render() {
        return(
            <form style={{backgroundColor:'aqua'}}  onSubmit={this.handleSubmit}>
                <input type="search"
                    style={{border:'2%',borderRadius:'3px solid black', textAlign:'center'}}     
                    onChange={this.onSearchChange}
                    name="search"
                    ref={(input) => this.query = input}
                    placeholder="Search..." />
                <button style={{backgroundColor:'lightblue',color:'black',margin:'3px'}} type="submit" id="submit">Go!</button>
            </form>
        );
    }
}

export default Search;