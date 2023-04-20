import React from 'react';
import {useForm} from "react-hook-form";
import {saveComm} from "../../services/post.api.service";

const CommentForm = () => {
    let {register, handleSubmit} = useForm();

   function submit(data){
       saveComm().then(({data}) => console.log(data))
       console.log(data)
   }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='userId' {...register('userId')}/>
                <input placeholder='id' {...register('id')}/>
                <input placeholder='name' {...register('name')}/>
                <input placeholder='email' {...register('email')}/>
                <input type='submit' value={'save comm'}/>
            </form>
        </div>
    );
};

export default CommentForm;