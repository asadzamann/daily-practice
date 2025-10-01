import { use } from "react"

export default function Users({fetchUsersCon}){
    const users = use(fetchUsersCon);
    console.log(users)
    return(
        <div className="card">
            <h3>Users: </h3>
        </div>
    )
}