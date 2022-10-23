import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

export function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        //funcion de loguear ()
        //fetch('/myapi/login',{email,password})
        console.log({
            email: email,
            password: password
        })
    }


    // console.log(email)

    return (
        <div>
            <h1>LOGIN</h1>

            <Header />

            <form onSubmit={handleSubmit} action="">
                <input onChange={handleEmailChange} value={email} type="email" placeholder='Email' />
                <input onChange={handlePasswordChange}  value={password} type="password" placeholder='Password' />
                <button>Enviar</button>
            </form>

            <button onClick={()=>{}}>cambiarEmail</button>
            {email}
        </div>
    )
}
