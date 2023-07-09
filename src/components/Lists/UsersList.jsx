import React from 'react';
import UsersItem from "./UsersItem";

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
                <UsersItem users={users} />
            </table>
        </div>
    );
};

export default UsersList;