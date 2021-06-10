import React from 'react';
import './Moment.css';

const Moment = ({
  moment,
  moments,
  setMoments,
  // formDisplay,
  // setFormDisplay,
}) => {
  // const [editFormDisplay, setEditFormDisplay] = useState(false);

  // const displayEditForm = () => {
  //   if (!editFormDisplay) {
  //     setEditFormDisplay(true);
  //   } else {
  //     setEditFormDisplay(false);
  //   }
  // };

  const removeMoment = () => {
    setMoments(moments.filter((el) => el.id !== moment.id));
  };
  return (
    <div className='moment'>
      <div className='moment-content'>
        <a href={moment.link} target='_blank' rel='noreferrer'>
          <img src={moment.img} alt='' />
        </a>
        <h2>{moment.title}</h2>
        <p>{moment.description}</p>
        <button className='btn'>Edit</button>
        <button className='btn' onClick={removeMoment}>
          Remove
        </button>
      </div>

      {/* {formDisplay && (
        <EditMoment
          formDisplay={formDisplay}
          setFormDisplay={setFormDisplay}
          setMoments={setMoments}
          moments={moments}
          moment={moment}
        />
      )} */}
    </div>
  );
};

export default Moment;
