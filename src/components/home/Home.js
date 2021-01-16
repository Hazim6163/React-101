import React, { useEffect, useState } from 'react'
import OrgsList from './OrgsList'

function Home() {
    //Create the Array to map it 
    const [orgs, setOrgs] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    //start using useEffect function: 
    // get called whenever the Component is mounted and unmounted on updated too
    useEffect(() => {
        //fetch the Data from the Remote Server
        //whenever the component mount
        //and now i can understand the the array in the end of the function is to pass the state vars when changes need to fire this function for Ex. when i need to refetch the data when the isLoading is changed i can make that when i pass isLoading to the array at end of the useEffect function. awesome thanks react.
        fetch('http://localhost:8000/orgs').then(res => {
            if (!res.ok) {
                throw Error('could not fetch the data for that resource');
            }
            return res.json()
        }).then(data => {
            setOrgs(data)
            setLoading(false)
            console.log(data)
        })
            .catch((error => {
                setErr(error.message)
                setLoading(false)
            }))
    }, [])

    return (
        <div>
            <h1 >Home</h1>
            {orgs && <OrgsList orgs={orgs} />}
            {isLoading && <div className="loading">loading</div>}
            {err && <div className="loading">{err}</div>}
        </div>
    )
}

export default Home
