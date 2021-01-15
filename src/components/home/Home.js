import React, { useState } from 'react'
import OrgsList from './OrgsList'

function Home() {
    //Create the Array to map it 
    const [orgs, setOrg] = useState([
        { id: 1, name: 'Me4Life', location: 'Germany', for: 'all' },
        { id: 2, name: 'EgyBank', location: 'Egypt', for: 'all' },
    ])
    return (
        <div>
            <h1 >Home</h1>
            <OrgsList orgs={orgs} />
        </div>
    )
}

export default Home
