import React from 'react';
import {useForm} from "react-hook-form";
import {saveUser} from "../../services/post.api.service";


const UserForm = () => {

    let {register, handleSubmit} = useForm();

    function submit(data) {
        console.log(data)
        saveUser(data).then(({data})=>console.log(data));
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>

                <input placeholder='id' {...register('id', {required: true})}/>
                <input placeholder='name' {...register('name')}/>
                <input placeholder='email' {...register('email')}/>
                <input type='submit' value={'save user'}/>
            </form>

        </div>
    );
};

export default UserForm;