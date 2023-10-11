import Title from "./Title";
// import React from 'react'

interface Book {
  
    bookName: string;
    img: string;
    description: string;
  
}


function Book({bookName,img,description}: Book) {
  return (
    <div style={{border: '1px black solid',borderRadius:'15px',margin:'15px',padding:'10px'}}>
      < Title text={bookName} size="medium" />
      <img src={img} alt="book" width={500} />
      <p>{description}</p>
    </div>
  )
}

export default Book


