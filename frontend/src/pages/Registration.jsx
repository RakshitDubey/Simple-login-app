import { useState } from "react";
import '../App.css'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/register', {
            username: username,
            password: password
          });
          console.log(response.data); // Assuming the response contains some data
          alert("Register Successfull")
          navigate('/login')
        } catch (error) {
          console.error('Error:', error);
          alert("Error occured")
        }
      };
    return (
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Create an Account</h2>
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
          Already have an Account <Link to='/login'>Login</Link>
        </div>
      </div>
    );
  }
  
  export default Registration;