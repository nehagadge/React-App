import React from 'react'

const Card = ({id,name,email}) => {

    return (
<div className='tc bg-light-gray dib ma2 grow shadow-3 ba br4 bw2'>
            <br></br><img alt='robots' src={`https://robohash.org/${id}`}></img>
            <h2>{name }</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card