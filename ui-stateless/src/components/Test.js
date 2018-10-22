import React, {Component} from 'react';
import {AuthContext} from '../App';

class Test extends Component {
  render() {
    return (
        <div>
          <h1>Test</h1>
          <AuthContext.Consumer>
            {auth => <div>{auth}</div>}
          </AuthContext.Consumer>
          <a onClick={this.props.handleLogout}>wyloguj</a>
        </div>
    );
  }
}

Test.propTypes = {};

export default Test;
