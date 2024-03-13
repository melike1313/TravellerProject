import React, { useState } from 'react';
import '../SignUp.css';


function SignUp() {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => setIsLoginView(!isLoginView);

  return (
    <div className="app">

  

      <div className="form-container">
        <h2>{isLoginView ? 'Login' : 'Sign Up'}</h2>
        <form>
          {!isLoginView && (
            <input type="text" placeholder="Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLoginView ? 'Login' : 'Sign Up'}</button>
        </form>
        <button onClick={toggleView}>
          {isLoginView ? 'Create an account' : 'Have an account? Login'}
        </button>
      </div>
    </div>
  );
}

export default SignUp;
