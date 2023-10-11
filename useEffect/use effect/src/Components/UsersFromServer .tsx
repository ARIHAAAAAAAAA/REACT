import { useEffect, useState } from "react"
import UserCard from "./UserCard"

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};


async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
}

function UsersFromServer() {

    const [items, setItems] = useState<User[]>([])

    useEffect(() => {
        getData().then((res) => {
            setItems(res)
        })
    }, [])

    return (
        <>
            <h1>UsersFromServer</h1>
            <div style={{ border: '1px black solid', display: 'flex', flexWrap: 'wrap' }} id="users">
                {items.map((item) => {
                    return (
                        <UserCard  data={item}/>
                    )
                })}
            </div>
        </>
    )
}

export default UsersFromServer 