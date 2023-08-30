// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import './App.css';
import Header from './Header ';
import Mainn from './Mainn';
// import Book from './book';
import Footer from './footer';

export interface Book{
  bookName:string;
  img:string;
  description:string;
}

const book1 : Book ={
  bookName: "book 1",
  img:"https://shorturl.at/fpqX9",
  description:"Lorem ipsum dolor sit amex consectetur  eliot. Pish, deleing."
}
const book2 : Book = {
  bookName: "book 2",
  img:"https://shorturl.at/cxT89",
  description:"Lorem ipsum dolor sit amex consectetur  eliot. Pish, deleing."
}
const book3 : Book ={
  bookName: "book 3",
  img:"https://shorturl.at/qzGU0",
  description:"Lorem ipsum dolor sit amex consectetur  eliot. Pish, deleing."
}
const book4 : Book ={
  bookName: "book 4",
  img:"https://shorturl.at/jnyCI",
  description:"Lorem ipsum dolor sit amex consectetur  eliot. Pish, deleing."
}

const booksArr:Book[] = [book1,book2,book3,book4]

function App() {
  return (
    
      <div>
        <Header />
        <Mainn books={booksArr}/>
        <Footer/>
      </div>
    
  );
}

export default App;

