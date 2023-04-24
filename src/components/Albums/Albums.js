import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services/albums.service";
import Album from "../Album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        albumsService.getAll().then(value => value.data).then(value => setAlbums(value))

    },[])

    return (
        <div>
            {
                albums.map(value => <Album key={value.id} value={value}/>)
            }
        </div>
    );
};

export default Albums;