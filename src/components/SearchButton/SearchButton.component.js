import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import { Search } from '@material-ui/icons';



class SearchButton extends Component {
    render() {
        return (

                <Button variant="raised" color="primary" >
                <Search />
                 I am a Search Button you Click!
                </Button>
        );
    }
}

export default SearchButton;
