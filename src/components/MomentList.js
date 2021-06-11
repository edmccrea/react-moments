import React from 'react';
import Moment from './Moment';

import './MomentList.css';

const MomentList = ({
  moments,
  setMoments,
  formDisplay,
  setFormDisplay,
  displayForm,
  formType,
  setFormType,
}) => {
  return (
    <section className='moment-list'>
      {moments.map((moment) => {
        return (
          <Moment
            key={moment.id}
            moment={moment}
            moments={moments}
            setMoments={setMoments}
            formDisplay={formDisplay}
            setFormDisplay={setFormDisplay}
            displayForm={displayForm}
            formType={formType}
            setFormType={setFormType}
          />
        );
      })}
    </section>
  );
};

export default MomentList;
