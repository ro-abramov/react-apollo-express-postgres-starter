import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
  query {
    users {
      firstname
      lastname
      id
    }
  }
`;

function UserItem({ user, onSelectUser }) {
  return (
    <div onClick={() => onSelectUser(user)}>
      {user.firstname} {user.lastname}
    </div>
  );
}

const Users = ({ data: { loading, users, error }, onSelectUser }) => {
  if (loading) {
    return 'loading ...';
  }
  if (error) {
    return 'Error';
  }
  return (
    <React.Fragment>
      {users.map(user => <UserItem key={user.id} user={user} onSelectUser={onSelectUser} />)}
    </React.Fragment>
  );
};

const enhancer = graphql(query);

export default enhancer(Users);
