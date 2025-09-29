import { use } from "react"

export default function Friends({friendsPhoto}) {
    const photoFriends = use(friendsPhoto);
    console.log(photoFriends);
    return  (
        <div>
            <h1>Hi I am Asad, Nice to meet y'all</h1>
        </div>
    )
}