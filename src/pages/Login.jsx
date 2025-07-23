import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

/*  const handl Submit = (e) => {     ***Logica de autenticacion 
    e.preventDefault();
      navigate("/Home");
  };
*/
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ minWidth: "400px" }}>
        <h2 className="text-center mb-4">Inicio de sesión</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="tucorreo@web.com"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={()=> navigate("/Home")} >Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


