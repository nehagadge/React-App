import React from 'react'

const Card = ({id,name,email}) => {

    return (
        <div className='tc bg-yellow dib ma2 grow bw2 shadow-5'>
            <br></br><img alt='robots' src={`https://robohash.org/${id}`}></img>
            <h2>{name }</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card