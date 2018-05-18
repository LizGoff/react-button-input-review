import React, { Component } from 'react';

class SearchList extends Component {

  render() {
    return (
      <div>
        <ol>
          {this.props.newSearchList.map(search => <li key={search}>
            What are you looking for? {search} 
            {/* <button onClick={this.props.deleteHandler(search)} /> */}
          </li>)}
        </ol>
      </div>
    );
  }
}

export default SearchList;
