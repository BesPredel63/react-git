import React from 'react';

const UsersItem = ({users, remove}) => {

    if (!users.length) {
        return (
            <tbody>
                <tr><td colSpan='5'><h4 style={{textAlign: 'center'}}>Список пользователей пуст</h4></td></tr>
            </tbody>
        )
    }

    return (
        <tbody>
        {
            users.map(user =>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.birthDay}</td>
                    <td>
                        <button className='btn btn-danger' onClick={() => remove(user)}>Удалить</button>
                    </td>
                </tr>
            )
        }
        </tbody>
    );
};

export default UsersItem;