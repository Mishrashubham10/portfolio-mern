import { useState } from 'react';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:3000/api/v1/auth/register', {
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
    <form className="register" onSubmit={handleSubmit}>
      <div className="registerContainer loginContainer flex flex-col h-[400px] w-[500px] items-center justify-center bg-white/100 shadow-md gap-4 rounded-md">
        <h1 className='text-4xl text-black-300 font-bold mb-4'>Register With Us.</h1>
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="registerInput w-[350px] py-2 px-1 outline-none bg-transparent"
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="registerInput w-[350px] py-2 px-1 outline-none bg-transparent"
        />
        <button className='registerBtn'>Register</button>
        <div className="authButtons flex items-center justify-center gap-4 w-[300px] h-1 bg-white/10 py-4 px-1 rounded-sm">
          <button className='authBtn shadow-md'>
            <FontAwesomeIcon icon={faCoffee} />
          </button>
          <button className='authBtn shadow-md'>
            <FontAwesomeIcon icon={faCoffee} />
          </button>
          <button className='authBtn shadow-md'>
          <FontAwesomeIcon icon={faCoffee} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
