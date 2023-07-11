import React, {useState} from 'react';
import UsersList from "./Lists/UsersList";
import UsersForm from "./Forms/UsersForm";

const Users = () => {

    const [users, setUsers] = useState([
        {id: 1, name: 'Иван', lastName: 'Иванов', birthDay: '1982-05-14'},
        {id: 2, name: 'Петр', lastName: 'Петров', birthDay: '1985-09-02'},
        {id: 3, name: 'Сергей', lastName: 'Сергеев', birthDay: '1987-11-25'},
    ])

    const createUser = (user) => {
        setUsers([...users, user])
    }

    const removeUser = (user) => {
        setUsers(users.filter(u => u.id !== user.id))
    }

    const upDateUser = (user) => {
        users.forEach((element, index) => {
            if(element.id === user.id) {
                users[index] = user;
            }
        });
    }

    return (
        <div className='container'>
            <UsersForm create={createUser}/>
            <UsersList users={users} update={upDateUser} remove={removeUser}/>
        </div>
    );
};

export default Users;