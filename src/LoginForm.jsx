import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export default function LoginForm() {
  const { user, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) login(username);
  };

  return (
    <div className="p-4 border rounded-md max-w-md mx-auto">
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button className="btn mt-2" onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="p-2 border rounded"
          />
          <button onClick={handleLogin} className="btn">Login</button>
        </div>
      )}
    </div>
  );
}