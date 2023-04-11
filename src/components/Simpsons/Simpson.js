import React from 'react';

const Simpson = (props) => {
   let simpsons = props.xxx;
    return (
        <div>
            {
                simpsons.map(val => (
                    <div>
                    <div>Name of character - {val.name}</div>
                    <div>Surname of character - {val.surname}</div>
                    <div>Info - {val.info}</div>
                    <div>Age - {val.age} </div>
                    <img src={val.photo}></img>

                    </div>
                ))
            }
        </div>
    );
};

export default Simpson;