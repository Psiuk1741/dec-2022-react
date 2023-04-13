import React from 'react';

const Post = ({value, lift}) => {
    return (
        <div>
            {
                <p className={'container'}>
                    id - {value.id + ' '}
                    body - {value.body}
                    <br/>
                    <button onClick={()=>{lift(value)}} >details</button>
                </p>


            }
        </div>
    );
};

export default Post;