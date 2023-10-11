import Book from "./book"

interface Mainn{
 books: Book[]
}


function Mainn({books}:Mainn) {
  return (
   
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((element)=>{
          return  <Book bookName={element.bookName}
            img={element.img}
            description={element.description}/>
        })}
    </div>
  )
}

export default Mainn



