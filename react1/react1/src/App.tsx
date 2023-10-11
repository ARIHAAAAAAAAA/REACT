import './App.css'
import Text from './components/Text'
import Card from './components/Card'
import Select from "./components/Select"
import{useState} from "react"


// export interface Book{
//   bookName:string;
//   img:string;
//   description:string;
// }

// const book1 : Book ={
//   bookName: "book 1",
//   img:"https://shorturl.at/fpqX9",
//   description:"Lorem ipsum dolor sit amex consectetur  eliot. Pish, deleing."
// }
// const book2 : Book = {
//   bookName: "book 2",
//   img:"https://shorturl.at/cxT89",
//   description:"Lorem ipsum dolor sit amex consectetur  eliot. Pish, deleing."
// }
// const book3 : Book ={
//   bookName: "book 3",
//   img:"https://shorturl.at/qzGU0",
//   description:"Lorem ipsum dolor sit amex consectetur  eliot. Pish, deleing."
// }
// const book4 : Book ={
//   bookName: "book 4",
//   img:"https://shorturl.at/jnyCI",
//   description:"Lorem ipsum dolor sit amex consectetur  eliot. Pish, deleing."
// }

// const booksArr:Book[] = [book1,book2,book3,book4]

function App() {

  const [color, setColor] = useState('yellow')


  return (
    <>
  <Text text='text'/>

  <Card text='card' img='https://shorturl.at/AMSV3' description='psum dolor sit amex consectetur  eliot. Pish,' color={color}/>

  <Select setColor={setColor}/>

    </>
  )
}

export default App

