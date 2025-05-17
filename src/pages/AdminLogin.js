import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../utils/auth';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Admin email ve şifreyi sabitle
    if (email === 'admin@velynt.com' && password === 'admin123') {
      setToken('velynt-jwt-token');  // Giriş başarılı ise token'ı kaydet
      navigate('/admin/settings');   // Admin ayar sayfasına yönlendir
    } else {
      setErrorMessage('❌ Hatalı giriş. Email veya şifre yanlış.');
    }
  };

  return (
    <div style={{ padding: '3rem' }}>
      <h2>Velynt Admin Giriş</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label>Şifre:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white' }}>
          Giriş Yap
        </button>
      </form>
      {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
    </div>
  );
}
