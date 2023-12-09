import {  useNavigate} from "react-router-dom";
import { AuthContext } from "../context";
import { useContext } from "react";


export const LoginPage = () => {

  const {login} = useContext(AuthContext)
  const navigate= useNavigate()
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath')|| '/'
    login('Lucas F')

    navigate(lastPath, {replace: true })
  };
  return (
    <div className="container mt-6">
      <h1>login...</h1>
      <hr />

      <input type="text" placeholder="Username" />
      <button className="btn btn-primary m-3 p-1" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
