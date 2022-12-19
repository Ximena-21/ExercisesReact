import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { Table } from '../components/Table'
import { getProducts, getToken } from '../lib/request'

const url = 'http://localhost:8080/' 
//const navigate = useNavigate()
//const navigate = useNavigate();


export function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

   async function handleSubmit(event) {
        event.preventDefault()
        const data = {
            email: email,
            password: password
        }
        const dataLogin = await getToken(`${url}login`, data)

        const token = dataLogin.accessToken
       // navigate("/feed")
        window.localStorage.setItem("loginToken", token);
       
        console.log('DATA login>>>>', token)

       // getProducts(`${url}products`)

    }

    return (
        <div>
            <Header />

            <h1>LOGIN</h1>


            <form onSubmit={handleSubmit} action="">
                <input onChange={handleEmailChange} value={email} type="email" placeholder='Email' />
                <input onChange={handlePasswordChange}  value={password} type="password" placeholder='Password' />
                <button>Enviar</button>
            </form>

        </div>
    )
}

