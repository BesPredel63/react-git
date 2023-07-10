import React, {useState} from 'react';
import ButtonDelete from "../UI/Buttons/ButtonDelete";
import ButtonUpdate from "../UI/Buttons/ButtonUpdate";
import UserUpdate from "./UserUpdate";

const UsersItem = ({users, remove}) => {

    const [current, setCurrent] = useState()

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
            users.map((user, index) => {
                    if (user !== current) { return (
                        <tr key={user.id}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.birthDay}</td>
                            <td style={{width: 220}}>
                                <ButtonUpdate onClick={() => setCurrent(user)}>Изменить</ButtonUpdate>
                                <ButtonDelete onClick={() => remove(user)}>Удалить</ButtonDelete>
                            </td>
                        </tr>
                    )
                    } else {
                        return (
                            <UserUpdate current={current} />
                        )
                    }
                }

            )
        }
        </tbody>
    );
};

export default UsersItem;