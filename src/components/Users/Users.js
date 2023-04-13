import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value=>value.json())
            .then(allUsers => (setUsers(allUsers)))


    }, [])

    return (
        <div>
            {
                users.map(value => <User value={value} key={value.id}/>)
            }
        </div>
    );
};

export default Users;