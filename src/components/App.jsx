import React from 'react';
import request from 'superagent';
import {Link,hashHistory} from 'react-router';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <div>
          <ul>
            <ol><Link to="/todo">Todo</Link></ol>
          </ul>
          {this.props.children}
        </div>
      </div>
    )
  }
}
