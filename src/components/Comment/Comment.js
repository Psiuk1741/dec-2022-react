import React from 'react';

import {useNavigate} from "react-router-dom";

const Comment = ({value}) => {
    const navigate = useNavigate();
    return (
        <div>
            <div> {value.id} - {value.name}</div>
            <div>postId: {value.postId}</div>
            <button onClick={()=>navigate(`${value.postId}`)}>getCurrentPost</button>

        </div>
    );
};

export default Comment;