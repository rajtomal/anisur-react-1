
import React, { useState } from 'react'

export default function FromInput() {

    // const [name, setname] = useState();
    // const [email, setemail] = useState();

    const [user, setuser] = useState({name: '', email: ''})
    const {name, email} = user;


    // const hendleName = (e) => { 
    //     setuser({name: e.target.value, email})
    // }
    // const hendleEmail = (e) => {
    //     setuser({name, email: e.target.value})
    // }


    const handlechange = (e) => {

        setuser({...user, [e.target.name]: e.target.value})

        // const fillname = e.target.name
        // if( fillname === 'name'){
        //     setuser({name: e.target.value, email})
        // }else if(fillname === 'email'){
        //     setuser({name, email: e.target.value})
        // }
    }

    const handlesubmit = (e) => {
        // let userinfo = {
        //     name: name,
        //     email: email
        // }
        console.log(user)
        e.preventDefault();
    }



  return (
    <div>
        <form onSubmit={handlesubmit}>
            <div>
                <label>Name: </label>
                <input type="text" name='name' value={name} className='name' id='name' onChange={handlechange} required />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name='email' value={email} className='name' id='email' onChange={handlechange} required />
            </div>
            <button className='button' type='submit'>Submit</button>
        </form>
    </div>
  )
}
