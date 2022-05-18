import React from 'react';
import { Link } from 'react-router-dom';
const LinkBtn = ({ name, path, logOutUser }) => {
  return (
    <li className='nav-item mr-5'>
      {path ? (
        <Link className='nav-link' to={path}>
          {name}
        </Link>
      ) : (
        <button
          type='button'
          className='btn btn-danger btn-rounded'
          onClick={logOutUser}
        >
          {name}
        </button>
      )}
    </li>
  );
};

export default LinkBtn;
