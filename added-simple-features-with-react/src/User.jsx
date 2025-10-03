export default function User({user}){

    const {name , company, address} = user;
    const companyName = company.name;
    const city = address.city;
    return(
        <div className="card">
            <h1>Name: {name} </h1>
            <h1>Company: {companyName} </h1>
            <h1>City: {city} </h1>
        </div>
    )
}