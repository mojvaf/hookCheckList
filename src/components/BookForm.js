import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';


const NewBookFrom = () => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState(' ')
    const [author, setAuthor] = useState(' ')
    const handelSubmit = (e) => {
        e.preventDefault()
        addBook(title, author)
        setTitle(' ')
        setAuthor(' ')
    }


    return (
        <form onSubmit={handelSubmit}>

            <input type='text' value={title} required onChange={(e) => setTitle(e.target.value)} />
            <input type='text' value={author} required onChange={(e) => setAuthor(e.target.value)} />
            <input type='submit' value='Add Book' />
        </form>
    );

}
export default NewBookFrom