import { useEffect, useState } from "react"
import User from "./User";
// import User from "./User";
export default function Users(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1>Hello:{users.length}</h1>
            {
                users.map(use => <User user={use}></User>)
            }
        </div>
    )
}