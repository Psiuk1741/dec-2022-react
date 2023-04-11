import React from 'react';

const RickAndMorty = (props) => {
    let ricknmotry = props.asd;
    return (
        <div>
            {
                ricknmotry.map(value =>(
                    <div>
                        <div>Id - {value.id}</div>
                        <div>Name - {value.name}</div>
                        <div>Status - {value.status}</div>
                        <div>Species - {value.species}</div>
                        <div>Gender - {value.gender}</div>
                        <img src={value.image}/>
                        <br/>
                        <br/>
                    </div>


                ))
            }
        </div>
    );
};

export default RickAndMorty;