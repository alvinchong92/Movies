import React from 'react';
import request from 'superagent';
import Searchbar from '../components/Searchbar.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    const url = "'https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.' \""
    request.get(url)
    .set('X-Mashape-Key',`GHJ2ncsK9HmshOQbI4N49oG307KDp1l9xnhjsn0rdBwjrJNC9L`)
    .set("Accept","text/plain")
    .then((data) => {
     console.log('this api is working')
    })
  }
  render() {
    return(
      <div>
        <h1 className="title">Movie Title </h1>
        <Searchbar />
      </div>
    )
  }
}
