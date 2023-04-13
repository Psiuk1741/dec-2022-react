import React, {useEffect, useState} from 'react';
import post from "../Post/Post";
import Shuttle from "../Shuttle/Shuttle";

const Shuttles = () => {

    let [shuttles, setShuttles] = useState([])

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(allShuttles => setShuttles(allShuttles))
    },[])
    return (
        <div>
            {
                shuttles.map(value => <Shuttle value = {value} key = {value.id}/> )
            }


        </div>
    );
};

export default Shuttles;