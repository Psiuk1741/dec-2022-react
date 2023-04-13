import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";

const Posts = ({lift}) => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts);
            });


    }, [])


    return (
        <div>
            {
                posts.map(value => <Post value={value} key={value.id} lift={lift}/>)
            }
        </div>
    );
};

export default Posts;