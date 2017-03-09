import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: ''
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e) {
    const term = e.target.value;
    console.log(term);
    this.setState({
      searchterm: term,
    });
  }



  render() {
    return(
      <div className="search-bar">
        <input
        onChange = {this.handleChange}
        />
      </div>
    )
  }
}
