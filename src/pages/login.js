import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import Layout from '../components/Layout'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate(`/`)
    }
  }, [user]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('https://www.newsgrid.club/auth/local', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          identifier: email,
          password
        })
      })
      const data = await response.json();
      if (data.message) {
        setError(data.message[0].messages[0].message);
        return;
      }

      if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
      }
      // put a user data into localStorage
      localStorage.setItem('user', JSON.stringify(data));
      setUser(JSON.parse(localStorage.getItem("user")));
    } catch (error) {
    }
  }

  return (
    <Layout>
      <section className="login-page">
        <div className="login" >
          <div className="login-form-box">
            <h3 className="title">Log In</h3>

            <form onSubmit={handleSubmit} className="input-group">
              <input
                className="input-field"
                type="email"
                placeholder="email"
                onChange={e => {
                  setError('');
                  setEmail(e.target.value);
                }
                }
                required
                maxLength="100"
              />
              <input
                className="input-field"
                type="password"
                placeholder="password"
                onChange={e => {
                  setError('');
                  setPassword(e.target.value)
                }
                }
                required
                minLength="6"
                maxLength="50"
              />
              <button type="submit" className="login-btn">Log In</button>
            </form>
            {
              error && <p style={{ padding: "0.3rem", textAlign: "center", Weight: "bolder", color: "red" }}>{error}</p>
            }
            <div className="toRegister">
              No account yet?  <Link style={{ marginTop: "2rem", fontWeight: "bolder" }} to="/register" >Register</Link>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Login
