import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];
  const { category } = useParams();
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Link onClick={() => paginate(number)} className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;