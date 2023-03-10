import "./form.css";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
export default function Form() {
    const [mes, setMes] = useState('')
    async function request(url, method = "GET", data = null) {
    const headers = {"Content-type": "application/json"};
    let body;
    if (data) {
      console.log(data)
      body = JSON.stringify(data);
      console.log(body)
    }
    try{
    let response = null
    !response && setMes("Sending...")
    response = await fetch(url, {
      headers,
      method,
      body,
    });
    return await response.text();
  }
  catch (e) {
    if (e) {
      console.log(e.message)
    }
  }
  }
  const onSubmit = async (data) => {
    let obj = {...data, id: Date.now()}
    const dat = await request("http://localhost:4000/api/contacts","POST", obj);
    dat==="OK" ? setMes("You message has been sent!") : setMes("Oops, something went wrong, (maybe you forgot 'npm start for server?)")
    console.log(dat);
    form.current.reset();
  };
  const { register, handleSubmit } = useForm();
  const form = useRef();
  return (
    <form ref={form} className="form" onSubmit={handleSubmit(onSubmit)} onClick={()=>{setMes('')}}>
      <input
        {...register("name")}
        className="input"
        type="text"
        placeholder="Your name*"
        required
      />
      <input
        {...register("email")}
        className="input"
        type="email"
        placeholder="Your e-mail*"
        required
      />
      <textarea
        {...register("message")}
        className="textarea"
        placeholder="Your message*"
        required
      />
      <button className="submitBtn" type="submit">
        Send message
      </button>
      <p className="mes">{mes}</p>
    </form>
  );
}
