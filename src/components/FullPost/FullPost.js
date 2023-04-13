import React from 'react';

const FullPost = ({value}) => {
    return (
        <div>
            <h3>UserId - {value.userId}</h3>
            <h3>Id - {value.id}</h3>
            <h4>Title - {value.title}</h4>
            <p>Body - {value.body}</p>

        </div>
    );
};

export default FullPost;