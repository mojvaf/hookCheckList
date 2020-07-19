import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className='navbar'>
            <h1> List of books to read in this summer</h1>
            <p>currently you have {books.length} books to read</p>
        </div>
    )
}
export default Navbar;