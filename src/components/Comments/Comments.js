import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/comments.service";
import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{

        commentsService.getAll().then(value => value.data).then(value => setComments(value))

    },[])
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} value={value}/>)
            }
        </div>
    );
};

export default Comments;