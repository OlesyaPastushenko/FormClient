import "./form.css"
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
export default function Form (){
    
        const onSubmit = (data) => {
            console.log(data)
            form.current.reset()
        }
    const { register, handleSubmit } = useForm();
    const form = useRef()
    return (
        <form  ref={form} className="form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} className="input" type='text' placeholder="Your name*" required/>
            <input  {...register('email')} className="input" type='email' placeholder="Your e-mail*" required/>
            <textarea  {...register('message')}className="textarea" placeholder="Your message*" required/>
            <button className="submitBtn" type='submit'>Send message</button>
        </form>
    )
}