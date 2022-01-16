import React from 'react';
import avatar from '../images/avatars/image-amyrobson.png';
import Vote from './Vote';
import UserActions from './UserActions';

const Comment = () => {
    return (
        <div className='comment'>
            <div className='content-container'>
                <div className='comment-details'><span className='avatar'><img alt='author profile picture' src={avatar} /></span> <span className='username'>amyrobson</span> <span className='created-date'>1 month ago</span></div>
                <div className='comment-text'><p>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p></div>
            </div>

            <Vote />
            <UserActions />
        </div>
    )
}

export default Comment;