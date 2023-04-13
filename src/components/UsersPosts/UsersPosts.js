import React, {useEffect, useState} from 'react';
import UserPosts from "../UserPosts/UserPosts";
import Post from "../Post/Post";

const UsersPosts = ({chosenPost}) => {

    let [usersPosts, setUsersPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${chosenPost}/posts`)
            .then(value => value.json())
            .then(allUsersPost => setUsersPosts(allUsersPost))
    }, [chosenPost])

    return (
        <div>
            {
                // usersPosts.map(value => (<UserPosts key={value.id} value={value}/>))
                usersPosts.map(value => <UserPosts value={value} key={value.id}/>)
            }
        </div>
    );
};

export default UsersPosts;