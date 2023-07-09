import React from 'react';

const UsersItem = ({users}) => {
    return (
        <tbody>
        {
            users.map(user =>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.birthDay}</td>
                </tr>
            )
        }
        </tbody>
    );
};

export default UsersItem;