import React from 'react';
import ButtonSave from "../UI/Buttons/ButtonSave";
import InputNoLabel from "../UI/Inputs/InputNoLabel";

const UserUpdate = ({current}) => {



    return (
        <tbody>
                <tr key={current.id}>
                    <td></td>
                    <td>
                        <InputNoLabel
                            type='text'
                            value={current.name}
                        />
                    </td>
                    <td>
                        <InputNoLabel
                            type='text'
                            value={current.lastName}
                        />
                    </td>
                    <td>
                        <InputNoLabel
                            type='date'
                            value={current.birthDay}
                        />
                    </td>
                    <td style={{width: 120}}>
                        <ButtonSave>Сохранить</ButtonSave>
                    </td>
                </tr>
        </tbody>
    );
};

export default UserUpdate;