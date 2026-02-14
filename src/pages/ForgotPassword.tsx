import { useState } from 'react';
import './Login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-header">
            <div className="login-logo">✉️</div>
            <h1>Check Your Email</h1>
            <p>
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
          </div>

          <div className="login-footer">
            <a href="/login">← Back to Login</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">🔑</div>
          <h1>Forgot Password?</h1>
          <p>Enter your email to reset your password</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Reset Link
          </button>
        </form>

        <div className="login-footer">
          <a href="/login">← Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
