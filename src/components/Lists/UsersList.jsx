import React from 'react';
import UsersItem from "./UsersItem";

const UsersList = ({users, remove}) => {
    return (
        <div>
            <h2>Список пользователей</h2>
            <table className='table table-striped mt-4'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Дата рожденья</th>
                    <th></th>
                </tr>
                </thead>
                <UsersItem users={users} remove={remove}/>
            </table>
        </div>
    );
};

export default UsersList;