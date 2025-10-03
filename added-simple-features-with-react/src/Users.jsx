import { use } from "react";
import User from "./User";

export default function Users({usersData}) {
    
    const users = use(usersData);

    return (
        <div className="">
           <h2>User List Fetched from json placeholder</h2> 
         {users.map(user => <User key={user.id} user={user}></User>)}
        </div>
    )
}