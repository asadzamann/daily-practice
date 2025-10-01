export default function Friend({ friendprop }) {

    const { name, email, phone } = friendprop;

    console.log(friendprop)
    return (

        <div className="card">
            <h2>Name : {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>


        </div>
    )
}