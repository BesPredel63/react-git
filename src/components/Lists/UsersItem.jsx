import React from 'react';
import ButtonDelete from "../UI/Buttons/ButtonDelete";

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
            users.map((user, index) =>
                <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.birthDay}</td>
                    <td style={{width: 120}}>
                        <ButtonDelete className='btn btn-danger' onClick={() => remove(user)}>Удалить</ButtonDelete>
                    </td>
                </tr>
            )
        }
        </tbody>
    );
};

export default UsersItem;