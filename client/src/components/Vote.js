import React from 'react';

const Vote = ({ vote }) => {
    return (
        <div className='vote'>
            <div className='vote-container'><button>+</button>{vote}<button>-</button></div>
        </div>
    )
}

export default Vote;
