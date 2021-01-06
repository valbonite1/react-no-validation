/* ITO YUNG COMPONENT WHERE WE WILL RENDER THE DATA THAT WE GET FROM THE AddModal.js Component */

import React, {useState} from 'react';

 
const CommentItem = ( { deleteRecom, editRow, recommendations } ) => {

   /* ========================HANDLES MODAL FUNCTION======================== */

  // What is a modal? Modal yun yung kapag may priness kang button may lalabas na parang body 

  // Ito yung set of functions na maghahandle sa pag open-close ng modal natin 

  const [modalOpen, setModalOpen] = useState(false); //We initialize the state of the modal which is false. meaning kapag false. nakaclose siya

  // handleModalOpen will open the modal. nakalink to siya sa button na may fas fa-pen na name 

  const handleModalOpen = () => {
    setModalOpen(!false);
  }

  // this will just close the modal. nilink ko to siya sa Cancel button. 

  const handleModalClose = () => {
    setModalOpen(false);
  }

  // style lang to ng kulay ng backgorund color sa likod ng modal. so parang magffade yung likod and magddark and magkakaroon ng focus sa modal mismo 
  


  /* ================================================ */

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
                  <button className='btn-edit' onClick={() => editRow(recom)}><i className='far fa-edit'></i></button>
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