import React from 'react';

const UsersForm = () => {
    return (
        <form className='form-control'>
            <div className='row g-4'>
                <h2>Форма добавления пользователя</h2>
                <div className='col-md-4'>
                    <label htmlFor='enterNameUser'>Имя</label>
                    <input type='text' id='enterNameUser' className='form-control' placeholder='Введите имя' />
                </div>
                <div className='col-md-4'>
                    <label htmlFor='enterLastNameUser'>Фамилия</label>
                    <input type='text' id='enterLastNameUser' className='form-control' placeholder='Введите фамилию' />
                </div>
                <div className='col-md-2'>
                    <label htmlFor='enterBirthDayNameUser'>Дата рожденья</label>
                    <input type='date' id='enterBirthDayNameUser' className='form-control' placeholder='Выберите дату' />
                </div>
                <div className="col-md-2">
                    <button className='btn btn-primary'>
                        Добавить
                    </button>
                </div>
            </div>
        </form>
    );
};

export default UsersForm;