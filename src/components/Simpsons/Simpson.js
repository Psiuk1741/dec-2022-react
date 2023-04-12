import React from 'react';

const Simpson = ({xxx}) => {
    return (
        <div>
            <div>
                <div>Name of character - {xxx.name}</div>
                <div>Surname of character - {xxx.surname}</div>
                <div>Info - {xxx.info}</div>
                <div>Age - {xxx.age} </div>
                <img src={xxx.photo}></img>
            </div>
        </div>
    );
};

export default Simpson;