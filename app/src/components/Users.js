import React from 'react';
import gql from 'graphql-tag';
import styled from 'react-emotion';
import { graphql } from 'react-apollo';
import { Placeholder } from './styled';
import { Link } from 'react-router-dom';

const query = gql`
    query {
        users {
            firstname
            lastname
            id
        }
    }
`;

function UserItem({ className, user, onSelectUser }) {
    return (
        <div className={className} onClick={() => onSelectUser(user)}>
            <Link to={`/user/${user.id}`}>
                {user.firstname} {user.lastname}
            </Link>
        </div>
    );
}

const StyledUser = styled(UserItem)`
    color: ${props => props.theme.textColor};
    text-align: center;
`;

const Users = ({ data: { loading, users, error }, onSelectUser }) => {
    if (loading) {
        return <Placeholder>loading ...</Placeholder>;
    }
    if (error) {
        return <Placeholder danger>error</Placeholder>;
    }
    return (
        <React.Fragment>
            {users.map(user => (
                <StyledUser
                    key={user.id}
                    user={user}
                    onSelectUser={onSelectUser}
                />
            ))}
        </React.Fragment>
    );
};

const enhancer = graphql(query);

export default enhancer(Users);
