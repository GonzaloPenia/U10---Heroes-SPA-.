import { AuthContext } from "../context/index";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const onLogin = () => {  
    login('Gonzalo Pena');
    // Pequeño delay para asegurar que el estado se actualice
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 100);
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
