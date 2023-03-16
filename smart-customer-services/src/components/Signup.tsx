export default function Signup() {
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input type="name" className="form-control" id="firstName" />
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input type="name" className="form-control" id="lastName" />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
      </div>
      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input type="email" className="form-control" id="email" />
            <label htmlFor="email">Email address</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input type="name" className="form-control" id="city" />
            <label htmlFor="city">City</label>
          </div>
        </div>
      </div>
      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input type="password" className="form-control" id="password" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
            />
            <label htmlFor="confirmPassword">Re-type Password</label>
          </div>
        </div>
      </div>
    </div>
  );
}
