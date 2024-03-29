import { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:3000/api/v1/auth/login', {
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log(res);
  };

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <div className="loginContainer flex flex-col h-[400px] w-[500px] items-center justify-center bg-white/100 shadow-md gap-4 rounded-md">
          <h1 className="text-4xl text-black-300 font-bold mb-4">Login Page</h1>
          <input
            type="email"
            placeholder="Email..."
            className="loginInput w-[350px] py-2 px-1 outline-none bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            className="loginInput w-[350px] py-2 px-1 outline-none bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginBtn">Login</button>
        </div>
      </form>
      <div className="authButtons flex items-center justify-center gap-4 w-[300px] h-1 bg-white/10 py-4 px-1 rounded-sm">
        <button className="authBtn shadow-md">
          <FontAwesomeIcon icon={faCoffee} />
        </button>
        <button className="authBtn shadow-md">
          <FontAwesomeIcon icon={faCoffee} />
        </button>
        <button className="authBtn shadow-md">
          <FontAwesomeIcon icon={faCoffee} />
        </button>
      </div>
    </>
  );
};

export default Login;