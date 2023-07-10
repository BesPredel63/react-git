import React from 'react';
import UsersItem from "./UsersItem";

const UsersList = ({users, remove}) => {
    return (
        <div>
            <h2>Список пользователей</h2>
            <table className='table table-striped mt-4'>
                <thead>
                <tr>
                    <th style={{width: 75, textAlign: 'center'}}>ID</th>
                    <th style={{width: 150}}>Имя</th>
                    <th style={{width: 250}}>Фамилия</th>
                    <th style={{width: 250}}>Дата рожденья</th>
                    <th></th>
                </tr>
                </thead>
                <UsersItem users={users} remove={remove}/>
            </table>
        </div>
    );
};

export default UsersList;