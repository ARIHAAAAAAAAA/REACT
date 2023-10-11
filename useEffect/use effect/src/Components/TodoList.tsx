import { useEffect, useState } from "react"

async function getCard() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data
}

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
function TodoList() {

  const [items, setItems] = useState<Todo[]>([])
useEffect(()=>{ getCard().then((res) => {
  setItems(res)
  // console.log(res);
  
})},[])
 

  return (
    <div>
      {items.map((item) =>
        (<>{item.title}</>)
      )}
    </div>
  )
}

export default TodoList