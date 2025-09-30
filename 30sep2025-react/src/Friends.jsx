import { use } from "react"
import Friend from './Friend'

export default function Friends({ friends }) {
    const friends2 = use(friends);
    return (
        <div>
            <h1>Hello there</h1>
            {
                friends2.map(friend => <Friend></Friend>)
            }
        </div>
    )
}