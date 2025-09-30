import { use } from "react"
import Friend from './Friend'

export default function Friends({ friendsPhoto }) {
    const photoFriends = use(friendsPhoto);
    return (
        <div>
            <h1>Hi I am Asad, Nice meeting y'all</h1>
            {
                photoFriends.map(friend => <Friend></Friend>)
            }
        </div>
    )
}