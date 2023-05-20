import React, { Component } from 'react';
import { SearchButton, Searchbar, SearchForm, SearchFormInput } from './Searchbar.styled';
import { VscSearch } from "react-icons/vsc";

class SearchBar extends Component {
    state = {
        searchText: ``
    }
    clearForm() {
        this.setState({ searchText: '' });
    }
    onChangeInput = (e) => {
        this.setState({ searchText: e.target.value });
        
    }
    onSubmit = event => {
        event.preventDefault();
        if (this.state.searchText.trim() === ``) {
            this.clearForm();
            return;
        }
        this.props.onSubmit(this.state.searchText.trim());
        this.clearForm();
    }
    render() {
        return (
            <Searchbar>
                <SearchForm onSubmit={this.onSubmit}>


                    <SearchFormInput
                        onChange={this.onChangeInput}
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchText}
                    />
                    <SearchButton type="submit" >
                        <span><VscSearch /></span>
                    </SearchButton>
                </SearchForm>
            </Searchbar>
        )
    }
}

export default SearchBar