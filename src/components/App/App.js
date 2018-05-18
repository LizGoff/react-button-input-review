// took out { Component } from import and added React. to the class below, just as an example.

import React, { Component } from 'react';
import axios from 'axios';

// import Button from '@material-ui/core/Button';
// import { Search } from '@material-ui/icons'; //destructuring
import SearchButton from '../SearchButton/SearchButton.component'
import SearchTextArea from '../SearchTextArea/SearchTextArea.component'
import SearchList from '../SearchList/SearchList.component'


import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';



const myTheme = createMuiTheme ({
  palette: {
    primary: teal,
    secondary: cyan,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
})

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        searchList: [],
      };

    this.addSearch = this.addSearch.bind(this);
    // this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    this.getFromSearchList();
  }

  addSearch(newSearch) {
    console.log(newSearch);
    axios({
      method: 'POST',
      url: '/search',
      data: newSearch
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.getFromSearchList();
  }

  getFromSearchList = () => {

    axios({
      method: 'GET',
      url: '/search',
    })
      .then((response) => {
        this.setState({
          searchList: [
            ...response.data,
          ]
        })
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // deleteHandler = (searchList) => () => {
  //   axios({
  //     method: 'DELETE',
  //     url: '/search',
  //     params: searchList
  //   })
  //     .then((response) => {
  //       this.getFromSearchList();
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
 
  // };

    render() { 
      return ( 
        < MuiThemeProvider theme={myTheme}>
          <div>
            <SearchTextArea addSearch={this.addSearch}/>
            <SearchButton />

           <p> Search information goes here </p>
           <SearchList newSearchList={this.state.searchList} />
          </div>
        </MuiThemeProvider>
      );
    }
  }

export default App;
