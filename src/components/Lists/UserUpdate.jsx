import React, {useState} from 'react';
import ButtonSave from "../UI/Buttons/ButtonSave";
import InputNoLabel from "../UI/Inputs/InputNoLabel";

const UserUpdate = ({current, update}) => {

    const [user, setUser] = useState({
        name: current.name,
        lastName: current.lastName,
        birthDay: current.birthDay
    })

    const upDataUser = (e) => {
        e.preventDefault()
        let temp = {
            id: current.id,
            ...user
        }
        update(temp)
    }

    return (
        <tr key={current.id}>
            <td></td>
            <td>
                <InputNoLabel
                    type='text'
                    value={user.name}
                    onChange={e => setUser({...user, name: e.target.value})}
                />
            </td>
            <td>
                <InputNoLabel
                    type='text'
                    value={user.lastName}
                    onChange={e => setUser({...user, lastName: e.target.value})}
                />
            </td>
            <td>
                <InputNoLabel
                    type='date'
                    value={user.birthDay}
                    onChange={e => setUser({...user, birthDay: e.target.value})}
                />
            </td>
            <td style={{width: 120}}>
                <ButtonSave onClick={upDataUser}>Сохранить</ButtonSave>
            </td>
        </tr>
    )
};

export default UserUpdate;