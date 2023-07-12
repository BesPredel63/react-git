import React, {useState} from 'react';
import ButtonAdd from "../UI/Buttons/ButtonAdd";
import InputLabel from "../UI/Inputs/InputLabel";

const UsersForm = ({create}) => {

    const [user, setUser] = useState({
        name: '',
        lastName: '',
        birthDay: new Date()
    })

    const addNewUser = (e) => {
        e.preventDefault()
        const newUser = {
            id: Date.now(),
            ...user
        }
        create(newUser)
        setUser({
            name:'',
            lastName: '',
            birthDay: new Date()
        })
    }

    return (
        <form className='form-control'>
            <div className='row g-4'>
                <h2>Форма добавления пользователя</h2>
                <div className='col-md-4'>
                    <InputLabel
                        type='text'
                        unit='enterNameUser'
                        title='Имя'
                        placeholder='Введите имя'
                        value={user.name}
                        onChange={event => setUser({...user, name: event.target.value})}
                    />
                </div>
                <div className='col-md-4'>
                    <InputLabel
                        type='text'
                        unit='enterLastNameUser'
                        title='Фамилия'
                        placeholder='Введите фамилию'
                        value={user.lastName}
                        onChange={event => setUser({...user, lastName: event.target.value})}
                    />
                </div>
                <div className='col-md-2'>
                    <InputLabel
                        type='date'
                        unit='enterBirthDayUser'
                        title='Дата рожденья'
                        placeholder='Введите дату'
                        value={user.birthDay}
                        onChange={event => setUser({...user, birthDay: event.target.value})}
                    />
                </div>
                <div className="col-md-2 pt-4">
                    <ButtonAdd onClick={addNewUser}>
                        Добавить
                    </ButtonAdd>
                </div>
            </div>
        </form>
    );
};

export default UsersForm;