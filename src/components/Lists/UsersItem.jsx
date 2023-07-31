import React, {useState} from 'react';
import ButtonDelete from "../UI/Buttons/ButtonDelete";
import ButtonUpdate from "../UI/Buttons/ButtonUpdate";
import UserUpdate from "./UserUpdate";

const UsersItem = ({users, update, remove}) => {

    const [current, setCurrent] = useState()
    const [visible, setVisible] = useState(false)

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
            users.map((user, index) => (
                current !== user || visible !== true
                    ?   <tr key={user.id}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.birthDay}</td>
                            <td style={{width: 220}}>
                                <ButtonUpdate onClick={() => {
                                    setCurrent(user)
                                    setVisible(true)
                                }}>Изменить</ButtonUpdate>
                                <ButtonDelete onClick={() => remove(user)}>Удалить</ButtonDelete>
                            </td>
                        </tr>
                    :   <UserUpdate current={current} update={update} setVisible={setVisible}/>
                )
            )
        }
        </tbody>
    );
};

export default UsersItem;