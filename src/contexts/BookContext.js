import React, { createContext, useState } from 'react';
import { v3 as uuidv3 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const { v: uuidv } = require('uuid');

    const [books, setBooks] = useState([
        { title: 'name of the wind', author: 'sara', id: 1 },
        { title: 'the final empire', author: 'branard', id: 2 }
    ])

    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuidv3 }])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;