import React from 'react';

export default function Pagination ({rowsPerPage, data, updateData}) {

    const pageNumbers = [];
    for (var i = 1; i <= Math.ceil(data.length / rowsPerPage); i++) {
        pageNumbers.push(i);
      }

    //const paginateNumber = 
    return (
        <nav>
            <ul>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick = {(e) => {
                        e.preventDefault();
                        updateData({currentPage: number})
                    }} href='!#'>
                    {number}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    );
}
