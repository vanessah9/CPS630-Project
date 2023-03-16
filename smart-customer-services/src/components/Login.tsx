interface InputProps {
  name?: String;
}

export default function Login(props: InputProps) {
  return (
    <div className="login">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <div className="mb-3">
          <div className="form-floating">
            <input type="email" className="form-control" id="email" />
            <label htmlFor="email">Email Address</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <input type="password" className="form-control" id="password" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg login-btn">
          Login
        </button>
      </form>
    </div>
  );
}
