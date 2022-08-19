import React, { useState } from 'react';


function SinglePet(props) {

  const toggleButton = document.querySelector('.toggleButton')
  const divWrapper = document.querySelector('.single-pet')




  const [isActive, setActive] = useState('false')
  function handleToggle() {
    setActive(!isActive)
  }

  return (
    <div className={isActive ? 'single-pet' : 'single-pet adopted'}>
      <h1>{props.pet.name}</h1>
      <h2>{props.pet.description}</h2>
      <h2>{props.pet.species}</h2>
      <p className='toggled'>{isActive ? 'Available' : 'Adopted!'}</p>
      <button className='toggleButton' onClick={handleToggle}>Toggle Status</button>
    </div>

  );

}


export default SinglePet;
