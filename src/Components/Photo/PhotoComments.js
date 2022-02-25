import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);

  return (
    <div>
      <ul className={styles.comments}>
        {comments.map((comemnt) => (
          <li key={comemnt.comment_ID}>
            <b>{comemnt.comment_author}:</b>
            <span>{comemnt.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </div>
  );
};

export default PhotoComments;
