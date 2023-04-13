import React from 'react';
import UsersPosts from "../UsersPosts/UsersPosts";

const User = ({value, setChosenPost}) => {

    return (
        <div className={'left-side'}>
            id - {value.id} <br/>
            Name - {value.name} <br/>
            <button onClick={() => setChosenPost(value.id)}>user posts</button>
        </div>
    );
};

export default User;