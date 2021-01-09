import React, { useState } from 'react';

const AddComment = ( { addRecom } ) => {

/* ========================HANDLES FORM INPUT AND FORM SUBMIT======================== */

const [firstName, setFirstName] = useState(''); //for firstName input
const [lastName, setLastName] = useState(''); //for lastName input
const [comment, setComment] = useState(''); // for comment input

//handles the submit.

const handleSubmit = (e) => {
  e.preventDefault(); //prevents the page from reload.
  setFirstName(''); //everytime you submit, empties field
  setLastName('');//everytime you submit, empties field
  setComment(''); //everytime you submit, empties field
  addRecom(firstName, lastName, comment); //passed down function from parent componenet


}

  return(
    <>
      <div className='comment-header'>
        <div className='comment-header-text'> 
          <h2>Write a Recommendation</h2>
        </div>
      </div>
      <form className='modal-container' autoComplete='off'>
          <div className='modal-header'>
            <h2>Let Val know your thoughts!</h2>
            <p>Leave your comment here.</p>
          </div>
          <div className='form-container'>
              <div className='input-container'>
                <label>First Name</label>
                <input 
                  type='text' 
                  required
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder='First Name'
                />
              </div>
              <div className='input-container'>
                <label>Last Name</label>
                <input 
                  type='text' 
                  required
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder='Last Name'
                  />
              </div>
              <div className='input-container'>
                <label>Recommendation</label>
                <textarea 
                  name='Comment' 
                  rows='10' 
                  cols='40' 
                  required
                  value={comment} 
                  onChange={(e) => setComment(e.target.value)} 
                  placeholder='Recommendation'
                  />
              </div>
          </div>
          <div className='modal-btn'>
            <button className='btn-write' type='submit' onClick={handleSubmit}>Write</button>
          </div>
      </form>
    </>
  );
}

export default AddComment;