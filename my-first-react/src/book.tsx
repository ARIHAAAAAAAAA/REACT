import Title from "./Title";
// import React from 'react'

interface Props{
    book:{
        bookName:string;
        img:string;
        description:string;
    }
}



export default function Book(props:Props) {
  return (
    <div className="book" style={{width:'500px', border:'1px black solid', borderRadius:'15px', margin:'10px'}}>
        <Title title={props.book.bookName}/>
        <img src={props.book.img} alt="book" width={500}/>
        <p>{props.book.description}</p>

    </div>
  )
}
