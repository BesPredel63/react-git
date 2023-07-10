import React, {useState} from 'react';
import ButtonSave from "../UI/Buttons/ButtonSave";

const UserUpdate = ({current}) => {

    const [upDateUser, setUpdateUser] = useState({
        name: '',
        lastName: '',
        birthDay: new Date()
    })

    const updateUser = (e) => {
        const user = {
            name: e.target.value,
            lastName: e.target.value,
            birthDay: e.target.value,
        }
        console.log('update: ', user)
    }

    console.log('current user:', current)

    return (
                <tr key={current.id}>
                    <td></td>
                    <td>
                        <input type='text' value={current.name} onChange={e => setUpdateUser(e.target.value)} />
                        {/*<InputNoLabel*/}
                        {/*    type='text'*/}
                        {/*    value={current.name}*/}
                        {/*    onChange={e => setUpdateUser(e.target.value)}*/}
                        {/*/>*/}
                    </td>
                    <td>
                        <input type='text' value={current.lastName} onChange={e => setUpdateUser(e.target.value)} />
                        {/*<InputNoLabel*/}
                        {/*    type='text'*/}
                        {/*    value={current.lastName}*/}
                        {/*    onChange={e => setUpdateUser(e.target.value)}*/}
                        {/*/>*/}
                    </td>
                    <td>
                        <input type='text' value={current.birthDay} onChange={e => setUpdateUser(e.target.value)} />
                        {/*<InputNoLabel*/}
                        {/*    type='date'*/}
                        {/*    value={current.birthDay}*/}
                        {/*    onChange={e => setUpdateUser(e.target.value)}*/}
                        {/*/>*/}
                    </td>
                    <td style={{width: 120}}>
                        <ButtonSave onClick={updateUser}>Сохранить</ButtonSave>
                    </td>
                </tr>
    );
};

export default UserUpdate;