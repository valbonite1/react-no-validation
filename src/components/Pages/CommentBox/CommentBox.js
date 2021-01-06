/* Ito yung Pinakamama na component. Tagahawak lang ng mga bata niya. Sabi ni sir iangat ko raw mga state pero di ko alam pano kaya ganito nalang HAHAHAHHAHAA
You can rename the components with anything you want.  */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; //this is another library. please install this. explanation in NotesForJatt.
import AddModal from './AddModal';
import initialState from './InitialState'; //nilabas ko sa ibang file yung data para hindi magulo sa loob ng code. This file is not a component, it just contains data. This is the initial data that you can provide. Gusto ko kasi parang may laman na na fake comments. HAHAHAHA yun yung screenshot na sinend ko sayo. You don't have to do this if you dont want to. You can simply start with an empty array and add comments from there.
import CommentItem from './CommentItem';

import EditComment from './EditComment';
import './CommentBox.css';

const CommentBox = () => {

  //this is the useEffect that will get our initial data. 

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

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, firstName: user.firstName, lastName: user.lastName, comment: user.comment });
    
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setRecommendations(recommendations.map(user => (user.id === id ? updateUser : user)));
  };

  return(
    <>
      <div className='comment-section'>
      {editing ? (
              <EditComment
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
          ) : (
            <AddModal addRecom={addRecom}/>
          )}
        <CommentItem editRow={editRow} deleteRecom={deleteRecom} recommendations={recommendations} />
      </div>
    </>
  );
}

export default CommentBox;



