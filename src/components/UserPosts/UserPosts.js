import React from 'react';

const UserPosts = ({value}) => {
    return (
        <div>
            id - {value.id}<br/>
            userid - {value.userId}<br/>
            title - {value.title}<br/>
            <hr/>
        </div>
    );
};

export default UserPosts;