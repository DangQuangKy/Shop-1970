import React from 'react';
import './Error.scss';

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="home-link">Go to Homepage</a>
      </div>
    </div>
  );
};

export default Error;
