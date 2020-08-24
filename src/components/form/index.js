import React from 'react';
import { useForm } from "react-hook-form";


export default function Form(){
    const {register, handleSubmit, errors} = useForm();    
    const onSubmit = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="nome" ref={register} type="text" placeholder="user"/>
            <input name="email" ref={register({required: true})} type="password" placeholder="password"/>
            {errors.email && <span>This field is required</span>}
            <button>Submit</button>
        </form>
    )
}