import { Book } from "./App"
import BookComp from './book'
// import React from 'react'
interface Props {
    books: Book[]
}

export default function books(props: Props) {
    const { books } = props
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {books.map((book)=>(
                <BookComp book ={book}/>
            ))}
        </div>

    )
}
