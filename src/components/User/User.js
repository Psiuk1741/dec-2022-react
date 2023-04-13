import React from 'react';

const User = ({value}) => {
    return (
        <div>
            id - {value.id} <br/>
            Name - {value.name}
        </div>
    );
};

export default User;