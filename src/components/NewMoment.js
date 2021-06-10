import React, { useState, Fragment } from 'react';
import './NewMoment.css';

const NewMoment = ({ formDisplay, setFormDisplay, moments, setMoments }) => {
  const hideFormHandler = () => {
    if (formDisplay) {
      setFormDisplay(false);
    } else {
      setFormDisplay(true);
    }
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    img: '',
    id: '',
    link: '',
  });

  const { title, description, img, link } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addMoment = (e) => {
    e.preventDefault();
    if (title !== '' && description !== '') {
    }
    let id = Math.random();
    setMoments([...moments, { id, title, description, img, link }]);
    setFormDisplay(false);
  };

  return (
    <Fragment>
      {formDisplay && (
        <section className='new-moment-body'>
          <div className='new-moment-container'>
            <p className='close-form' onClick={hideFormHandler}>
              X
            </p>
            <h1>Add a Moment</h1>
            <form onSubmit={addMoment} className='new-moment-form form'>
              <input
                type='text'
                name='title'
                value={title}
                onChange={(e) => onChange(e)}
                placeholder='Title'
              />
              <input
                type='text'
                name='description'
                value={description}
                onChange={(e) => onChange(e)}
                placeholder='Description'
              />
              <input
                type='text'
                name='img'
                value={img}
                onChange={(e) => onChange(e)}
                placeholder='Image URL'
              />
              <input
                type='text'
                name='link'
                value={link}
                onChange={(e) => onChange(e)}
                placeholder='Video Link'
              />
              <button className='btn add-btn'>+ Add Moment</button>
            </form>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default NewMoment;
