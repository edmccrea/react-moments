import { useState } from 'react';
import './global-styles.css';
import './App.css';
import MomentList from './components/MomentList';
import NewMoment from './components/NewMoment';

import { defaultMoments } from './moments';

function App() {
  const [formDisplay, setFormDisplay] = useState(false);

  const displayForm = () => {
    if (!formDisplay) {
      setFormDisplay(true);
    } else {
      setFormDisplay(false);
    }
  };

  const [moments, setMoments] = useState(defaultMoments);

  return (
    <div className='container'>
      {formDisplay && (
        <NewMoment
          formDisplay={formDisplay}
          setFormDisplay={setFormDisplay}
          setMoments={setMoments}
          moments={moments}
        />
      )}
      <h1>MOMENTS</h1>
      {!formDisplay && moments.length < 1 && (
        <div className='welcome'>
          <p>
            Welcome to your Moments page. Here you can collect some of your
            favourtie moments from whatever category and add video links to
            share with your friends, family or the world.
          </p>
          <button className='btn ' onClick={displayForm}>
            + Add Your First Moment
          </button>
        </div>
      )}
      {!formDisplay && moments.length > 0 && (
        <button className='btn new-btn' onClick={displayForm}>
          + Add a Moment
        </button>
      )}

      <MomentList
        moments={moments}
        setMoments={setMoments}
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
        displayForm={displayForm}
      />
    </div>
  );
}

export default App;
