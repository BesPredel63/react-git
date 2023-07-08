import React, {useState} from 'react';
import UsersList from "./Lists/UsersList";

const Users = () => {

    const [users, setUsers] = useState([
        {id: 1, name: 'Иван', lastName: 'Иванов', birthDay: '1982-05-14'},
        {id: 2, name: 'Петр', lastName: 'Петров', birthDay: '1985-09-02'},
        {id: 3, name: 'Сергей', lastName: 'Сергеев', birthDay: '1987-11-25'},
    ])

    return (
        <div className='container'>
            <UsersList users={users}/>
        </div>
    );
};

export default Users;