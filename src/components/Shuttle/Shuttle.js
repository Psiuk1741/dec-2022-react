import React from 'react';

const Shuttle = ({value}) => {
    if (value.launch_year !== '2020'){
    return (

        <div className={'container'}>
            <h3>Mission Name -  {value.mission_name}</h3>
            <p> Launch Year - {value.launch_year}</p>
            <img src = {value.links.mission_patch_small}></img>

        </div>
    );}
};

export default Shuttle;