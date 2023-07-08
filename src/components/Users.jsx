import React, {useState} from 'react';

const Users = () => {

    const [users, setUsers] = useState([
        {id: 1, name: 'Иван', lastName: 'Иванов', birthDay: '1982-05-14'},
        {id: 2, name: 'Петр', lastName: 'Петров', birthDay: '1985-09-02'},
        {id: 3, name: 'Сергей', lastName: 'Сергеев', birthDay: '1987-11-25'},
    ])

    return (
        <div className='container'>
            <h1 style={{textAlign: 'center'}}>Список пользователей</h1>
            <table className='table table-striped mt-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Birth Day</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map(user =>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.birthDay}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default Users;