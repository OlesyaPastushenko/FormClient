import "./form.css"
import { useForm } from "react-hook-form";
export default function Form (){
    return (
        <form className="form">
            <input className="input" type='text' placeholder="Your name*"/>
            <input className="input" type='email' placeholder="Your e-mail*"/>
            <textarea className="textarea" placeholder="Your message*"/>
            <input className="submitBtn" type='submit'/>
        </form>
    )
}