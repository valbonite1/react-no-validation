/* ITO YUNG COMPONENT WHERE WE WILL RENDER THE DATA THAT WE GET FROM THE AddModal.js Component */

import React from 'react';
 
const CommentItem = ( { deleteRecom, editRow, recommendations } ) => {

  return(
    <>
      <ul className='comment-list'>
        {recommendations.map((recom, index) => {
          return(
            <li key={recom.id}>
              <div className='comment-icon'>
                <i className='fas fa-user-circle'></i>
              </div>
              <div className='comment-content'>
                <div className='comment-name'>
                  <h2>{recom.firstName}</h2>
                  <h2>{recom.lastName}</h2>
                </div>
                <div className='comment-text'>
                  <p>{recom.comment}</p>
                </div>
                <div className='comment-btn'>
                  <a href='#edit' className='edit-link'><button className='btn-edit' onClick={() => editRow(recom)}><i className='far fa-edit'></i></button></a>
                  <button onClick={() => deleteRecom(index)} className='btn-trash'><i className='far fa-trash-alt'></i></button>
                </div>
              </div>
            </li>)
        })}
      </ul>
    </>
  );
}

export default CommentItem;