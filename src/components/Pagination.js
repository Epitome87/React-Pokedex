import React from 'react';
import styles from './Pagination.module.css';

function Pagination(props) {
  const { postsPerPage, totalPosts, paginate, currentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <nav className="Pagination ui pagination menu">
    //   <ul className='pagination'>
    //     {pageNumbers.map((number) => (
    //       <li key={number} className='page-item'>
    //         <a onClick={() => paginate(number)} href='!#' className='page-link'>
    //           {number}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <nav
      className={`${styles.Pagination} ui pagination menu inverted borderless`}
    >
      {pageNumbers.map((number) => (
        <a
          key={number}
          className={`item blue ${number === currentPage ? 'active' : ''}`}
          onClick={() => paginate(number)}
          // href='!#'
        >
          {number}
        </a>
      ))}
    </nav>
  );
}

export default Pagination;
