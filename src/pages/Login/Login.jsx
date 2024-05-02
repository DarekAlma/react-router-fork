import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';


const Login = () => {
    const {user,logincito } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      logincito(email, password);
      setEmail('');
      setPassword('');
      navigate('/');   
    };

    
    useEffect(() => {
        // Redirigir a la página principal después del inicio de sesión si el usuario está autenticado
        if (user) {
         navigate('/');
        }
    }, [user, navigate]); // Se ejecuta cuando cambia 'user' o 'navigate'

    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Correo Electrónico:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
          <label>
                Contraseña:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
          </label>
            <button type="submit">Iniciar Sesión</button>
        </form>
        <h1>Login</h1>
    </div>
  );
}
export default Login
