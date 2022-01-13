import React from 'react';

const Comment = () => {
    return (
        <div className='comment'>
            <div className='comment-details'><span className='avatar'>img</span> <span className='username'>amyrobson</span> <span className='created-date'>1 month ago</span></div>
            <div className='comment-text'><p>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p></div>
            <div className='vote'>
                <div className='mobile-vote'><button>+</button> 12 <button>-</button></div>
            </div>
            <div className='user-actions'><span>Reply</span></div>
        </div>
    )
}

export default Comment;