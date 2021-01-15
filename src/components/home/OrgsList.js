import React from 'react'

function OrgsList(props) {
    const { orgs } = props;
    return (
        <div>
            {orgs.map(org => (
                <div key={org.id}>
                    {org.name}
                </div>
            ))}
        </div>
    )
}

export default OrgsList
