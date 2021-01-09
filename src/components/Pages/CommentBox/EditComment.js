import React, { useState, useEffect } from "react";

const EditComment = ( props ) => {

  const [user, setUser] = useState(props.currentUser);

  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props]
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      props.updateUser(user.id, user);
      
    }

  return(
    <>
    <div className='modal-container' id='edit'>
        <div className='modal-header'>
          <h2>What changes do you want to make?</h2>
          <p>Update your comment here!</p>
        </div>
        <div className='form-container' autoComplete='off'>
            <div className='input-container'>
              <label>First Name</label>
              <input type='text' required value={user.firstName} name='firstName' onChange={handleInputChange}/>
            </div>
            <div className='input-container'>
              <label>Last Name</label>
              <input type='text' required value={user.lastName} name='lastName' onChange={handleInputChange}/>
            </div>
            <div className='input-container'>
              <label>Recommendation</label>
              <textarea name='Comment' rows='10' cols='40' required value={user.comment} name='comment' onChange={handleInputChange} />
            </div>
        </div>
        <div className='modal-btn'>
          <button className='btn-write' onClick={handleSubmit}>Update</button>
          <button className='btn-cancel' onClick={() => props.setEditing(false)}>Cancel</button>
        </div>
    </div>
  </>
  );
}

export default EditComment;