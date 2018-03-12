import React, {Component} from 'react';
import Todos from './components/todos';
import Users from './components/Users';
import styled from 'react-emotion';
import {media} from './styles';

class App extends Component {
  state = {
    selectedUser: null
  };

  setSelectedUser = user => this.setState({selectedUser: user});

  render() {
    return (
      <div className={this.props.className}>
        <h1>RAEP Starter Kit</h1>
        <Users onSelectUser={this.setSelectedUser} />
        {this.state.selectedUser && <Todos user={this.state.selectedUser} />}
      </div>
    );
  }
}

export default styled(App)`
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 20px;
    margin-top: 0;
    text-align: center;
    background-color: ${props => props.theme.fg};
  }

  ${media.mobile`width: 300px;`}
  ${media.tablet`width: 500px;`}
  ${media.laptop`width: 700px;`}
`;
