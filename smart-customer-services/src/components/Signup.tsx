export default function Signup() {
  return (
    <div className="signup">
      <h1 className="signup-title">Sign Up</h1>
      <form>
        <div className="row g-2 signup-row">
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
        <div className="row g-2 signup-row">
          <div className="col-md">
            <div className="form-floating">
              <input type="email" className="form-control" id="email" />
              <label htmlFor="email">Email Address</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="phone"
              />
              <label htmlFor="phone">Phone Number</label>
            </div>
          </div>
        </div>
        <div className="row g-2 signup-row">
          <div className="form-floating">
            <input
              type="text"
              className="form-control autocomplete-address"
              id="address"
            />
            <label htmlFor="address">Home Address</label>
          </div>
        </div>
        <div className="row g-2 signup-row">
          <div className="col-md">
            <div className="form-floating">
              <input type="text" className="form-control" id="city" />
              <label htmlFor="city">City</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input type="text" className="form-control" id="province" />
              <label htmlFor="province">Province</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input type="text" className="form-control" id="postal" />
              <label htmlFor="postal">Postal Code</label>
            </div>
          </div>
        </div>
        <div className="row g-2 signup-row">
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
        <button type="submit" className="btn btn-primary btn-lg signup-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
