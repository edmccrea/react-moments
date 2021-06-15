import React, { useState } from 'react';
import EditForm from './EditForm';
import './Moment.css';

const Moment = ({ moment, moments, setMoments }) => {
  const removeMoment = () => {
    setMoments(moments.filter((el) => el.id !== moment.id));
  };

  const [capturedMoment, setCapturedMoment] = useState('');

  const [editFormDisplay, setEditFormDisplay] = useState(false);

  const displayEditForm = () => {
    if (!editFormDisplay) {
      setCapturedMoment(moment);
      setEditFormDisplay(true);
      document.body.style.overflow = 'hidden';
    } else {
      setEditFormDisplay(false);
    }
  };
  return (
    <div className='moment'>
      <div className='moment-content'>
        <a href={moment.link} target='_blank' rel='noreferrer'>
          <img src={moment.img} alt='' />
        </a>
        <h2>{moment.title}</h2>
        <p>{moment.description}</p>
        <button className='btn' onClick={displayEditForm}>
          Edit
        </button>
        <button className='btn' onClick={removeMoment}>
          Remove
        </button>
      </div>

      {editFormDisplay && (
        <EditForm
          setMoments={setMoments}
          moments={moments}
          capturedMoment={capturedMoment}
          editFormDisplay={editFormDisplay}
          setEditFormDisplay={setEditFormDisplay}
        />
      )}
    </div>
  );
};

export default Moment;
