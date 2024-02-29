import { useState } from "react";
import '../App.css'
import axios from 'axios'
import { Link } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/login', {
            username: username,
            password: password
          });
          console.log(response.data); // Assuming the response contains some data
          alert("Login Successfull")
        } catch (error) {
          console.error('Error:', error);
          alert("Create an account first ")
        }
      };
    return (
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Login in</button>
            
          </form>
          Don't have an Account <Link to='/registration'>Create account</Link>
        </div>
      </div>
    );
  }
  
  export default Login;