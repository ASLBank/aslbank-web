import React from 'react';

import { Link } from 'react-router-dom';
import './styles/NotFound.css';

function NotFound() {
  return (
    <React.Fragment>
        <div className="NotFound_hero">
          <h1>404 Not Found</h1>
          
        </div>
        
        <div className="NotFound">

          <div className="container">
            <Link className="btn btn-primary" to="/">Return</Link>
          </div>

        </div>

      </React.Fragment>
  );
}

export default NotFound;
