import { useState } from "react"
import axios from 'axios';

const Register = () => {
    const [userData, setUserData] = useState ({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        country: ''
    });

    const handleInputchange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = () => {
        axios.post('http://localhost:8080/auth/register', userData)
        .then(response => {
            console.log('Usuario registrado con exito!', response.data)
        })
        .catch(error => {
            console.log('Error al registrar usuario', error);
        });
    };

    return (
        <div>
            <h2>Registro</h2>
            <form>
                <label>Nombre de usuario: 
                <input type="email" name="username" onChange={handleInputchange}/>
                </label>
                <br/>
                <label>Contraseña:
                <input type="password" name="password" onChange={handleInputchange}/>
                </label>
                <br/>
                <label>Nombre:
                <input type="text" name="firstname" onChange={handleInputchange}/>
                </label>
                <br/>
                <label>Apellido:
                <input type="text" name="lastname" onChange={handleInputchange}/>
                </label>
                <br/>
                <label>Pais:
                <input type="text" name="country" onChange={handleInputchange}/>
                </label>
                <br/>
                <button type="button" onClick={handleRegister}>Registrarse</button>
            </form>
        </div>
    );
};

export default Register;

