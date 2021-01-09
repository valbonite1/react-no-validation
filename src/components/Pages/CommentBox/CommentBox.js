import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import AddComment from './AddComment';
import initialState from './InitialState'; 
import CommentItem from './CommentItem';
import EditComment from './EditComment';
import './CommentBox.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const CommentBox = () => {

  useEffect(() => {

    Aos.init({ duration: 1000})

  }, [])

  //this is the useEffect that will getinitial data. 

  useEffect(()=>{

    const data = localStorage.getItem('recommendations')
    
    if(data){ 
      setRecommendations(JSON.parse(data))
     }

    },[]) 

  const [recommendations, setRecommendations] = useState(initialState) 

  const addRecom = (firstName, lastName, comment) => {
    setRecommendations([...recommendations, { id: uuidv4(), firstName, lastName, comment}])
  }

  //delete function

  const deleteRecom = (index) => {
    let newRecom = recommendations;
    newRecom.splice(index, 1);
    setRecommendations([...newRecom]);
  }


  useEffect(() => {
    let inputData = JSON.stringify(recommendations);
    localStorage.setItem('recommendations', inputData);
  }, [recommendations])


  /* ===========HANDLES EDIT=========== */

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, firstName: '', lastName: '', comment: ''};

  const [currentUser, setCurrentUser] = useState(initialFormState);

  //gets current user when edit is true

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, firstName: user.firstName, lastName: user.lastName, comment: user.comment });
    
  };

  //updates the changes made in the comments 
  
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setRecommendations(recommendations.map(user => (user.id === id ? updateUser : user)));
  };

  return(
    <>
      <div className='comment-section' data-aos='fade'>
      {editing ? (
              <EditComment
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
          ) : (
            <AddComment addRecom={addRecom}/>
          )}
        <CommentItem editRow={editRow} deleteRecom={deleteRecom} recommendations={recommendations} />
      </div>
    </>
  );
}

export default CommentBox;



