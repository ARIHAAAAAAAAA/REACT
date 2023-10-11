import { User } from "./UsersFromServer "
import TodoList from "./TodoList";
import { useState } from "react";

type Props = {
    data: User
}

const UserCard = ({data}: Props) => {
    const [toDo,setTodo] = useState<JSX.Element| null>(null)
  return (
    <div onClick={()=>{setTodo(<TodoList/>) }} style={{border:'1px black solid',borderRadius:'15px',margin:'5px',padding:'5px'}}>
        <h2>{data.name}</h2>
        <h3>{data.email}</h3>
        <div>{toDo}</div>
    </div>
  )
}

export default UserCard