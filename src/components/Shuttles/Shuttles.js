import React, {useEffect, useState} from 'react';
import post from "../Post/Post";
import Shuttle from "../Shuttle/Shuttle";

const Shuttles = () => {

    let [shuttles, setShuttles] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => value.filter(item => item.launch_year !== "2020"))
            .then(allShuttles => setShuttles(allShuttles))

    }, [])
    return (
        <div>
            {
                shuttles.map(value => <Shuttle value={value} key={value.id}/>)
            }


        </div>
    );
};

export default Shuttles;