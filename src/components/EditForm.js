import React, { useState, Fragment } from 'react';
import './NewMoment.css';

const EditForm = ({
  editFormDisplay,
  setEditFormDisplay,
  moments,
  setMoments,
  capturedMoment,
}) => {
  const hideFormHandler = () => {
    if (editFormDisplay) {
      setEditFormDisplay(false);
    } else {
      setEditFormDisplay(true);
    }
  };

  const [formData, setFormData] = useState({
    title: capturedMoment.title,
    description: capturedMoment.description,
    img: capturedMoment.img,
    link: capturedMoment.link,
  });

  const { title, description, img, link } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const editMoment = (e) => {
    e.preventDefault();
    if (title !== '' && description !== '') {
      for (let moment of moments) {
        if (capturedMoment.id === moment.id) {
          setMoments([...moments, ({ capturedMoment } = moment)]);
          setEditFormDisplay(false);
        }
      }
    }
  };

  return (
    <Fragment>
      {editFormDisplay && (
        <section className='new-moment-body'>
          <div className='new-moment-container'>
            <p className='close-form' onClick={hideFormHandler}>
              X
            </p>
            <h1>EditMoment</h1>
            <form onSubmit={editMoment} className='new-moment-form form'>
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
              <button className='btn add-btn'>Edit Moment</button>
            </form>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default EditForm;
