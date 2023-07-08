import React from 'react';

const UsersList = ({users}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Список пользователей</h1>
            <table className='table table-striped mt-4'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Birth Day</th>
                </tr>
                </thead>
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
            </table>
        </div>
    );
};

export default UsersList;