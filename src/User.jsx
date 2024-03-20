import './Posts.css'
export default function User({user}){
    const {name ,email, address}=user;
    return (
        <div className='post'>
            <h2>Name:{name}</h2>
            <h2>Email:{email}</h2>
            <h2>City:{address.city}</h2>
        </div>
    )
}