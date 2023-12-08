import {  useNavigate} from "react-router-dom";


export const LoginPage = () => {
  const navigate= useNavigate()
  const onLogin = () => {
    navigate('/search', {replace: true })
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
